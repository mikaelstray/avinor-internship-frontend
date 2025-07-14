import {createEntityAdapter} from "@reduxjs/toolkit";
import type {
    LocationLiteResponse,
    LocationOccupancyStatus,
    LocationResponse,
    UpdateOccupancyRequest
} from "./types.ts";
import {baseApi} from "../../app/api.ts";
import {Client} from "@stomp/stompjs";
import SockJS from 'sockjs-client';

const locationAdapter = createEntityAdapter<LocationResponse>() //TODO

export const locationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLiteLocationById: builder.query<LocationLiteResponse, number>({
            query: (locationId) => `/locations/${locationId}`
        }),
        updatePax: builder.mutation<LocationOccupancyStatus, UpdateOccupancyRequest>({
            query: ({ id, ...body }) => ({
                url: `locations/${id}/pax`,
                method: 'PATCH',
                body: body
            })
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

                            if (data && data.id === locationId) {
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
        //infinitesearch
    })
})

export const {
    useGetLiteLocationByIdQuery,
    useUpdatePaxMutation,
    useGetOccupancyStatusQuery
} = locationApi;

