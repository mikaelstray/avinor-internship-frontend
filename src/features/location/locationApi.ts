import {createEntityAdapter, createSelector, type EntityState} from "@reduxjs/toolkit";
import type {
    LocationOccupancyStatus, LocationRelationshipResponse,
    LocationResponse,
    UpdateOccupancyRequest
} from "./types.ts";
import {baseApi} from "../../app/api.ts";
import {Client} from "@stomp/stompjs";
import SockJS from 'sockjs-client';

const nearbyLocationAdapter = createEntityAdapter<LocationRelationshipResponse>({
    sortComparer: (a, b) => a.walkingTimeInMinutes - b.walkingTimeInMinutes,
});
const initialState = nearbyLocationAdapter.getInitialState()


export const locationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLocationById: builder.query<LocationResponse, number>({
            query: (locationId) => `/locations/${locationId}`
        }),
        updatePax: builder.mutation<LocationOccupancyStatus, UpdateOccupancyRequest>({
            query: ({ id, ...body }) => ({
                url: `locations/${id}/pax`,
                method: 'PATCH',
                body: body
            })
        }),
        getNearbyLocationsById: builder.query<EntityState<LocationRelationshipResponse, number>, number>({
            query: (locationId) => `/locations/${locationId}/nearby`,
            transformResponse(res: LocationRelationshipResponse[]) {
                return nearbyLocationAdapter.setAll(initialState, res)
            },
        }),
        getOccupancyStatus: builder.query<LocationOccupancyStatus, number>({
            query: (locationId) => `/locations/${locationId}/occupancy`,
            async onCacheEntryAdded(
                locationId,
                { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
            ) {
                const client = new Client({
                    webSocketFactory: () => new SockJS('http://localhost:8080/ws-pax'),
                    debug: (str) => {
                        console.log(new Date(), str);
                    },
                    reconnectDelay: 5000,
                    heartbeatIncoming: 4000,
                    heartbeatOutgoing: 4000,
                });

                try {
                    await cacheDataLoaded;

                    client.onConnect = () => {
                        client.subscribe('/topic/pax-updates', (message) => {
                            const data: LocationOccupancyStatus = JSON.parse(message.body);

                            if (data && data.locationId === locationId) {
                                updateCachedData((draft) => {
                                    draft.pax = data.pax;
                                    draft.updatedAt = data.updatedAt;
                                });
                            }
                        });
                    };

                    client.activate();
                } catch { /* empty */ }

                await cacheEntryRemoved;
                await client.deactivate();
            },
        }),
    })
})

export const {
    useGetLocationByIdQuery,
    useUpdatePaxMutation,
    useGetOccupancyStatusQuery,
    useGetNearbyLocationsByIdQuery
} = locationApi;

export const selectAllNearbyRelationships = (state, id) =>
    locationApi.endpoints.getNearbyLocationsById.select(id)(state)?.data?.entities ?? {};

export const selectNearbyRelationshipById = createSelector(
    [
        selectAllNearbyRelationships,
        (_state, _locationId, relationshipId) => relationshipId
    ],
    (allEntities, relationshipId) => allEntities[relationshipId]
);