import {createEntityAdapter, type EntityState} from "@reduxjs/toolkit";
import type {LocationLiteResponse, LocationPaxResponse, LocationResponse, UpdateOccupancyRequest} from "./types.ts";
import {baseApi} from "../../app/api.ts";

const locationAdapter = createEntityAdapter<LocationResponse>()

export const locationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLiteLocationById: builder.query<LocationLiteResponse, number>({
            query: (locationId) => `/locations/${locationId}`
        }),
        updatePax: builder.mutation<LocationPaxResponse, UpdateOccupancyRequest>({
            query: ({ id, ...body }) => ({
                url: `fines/${id}/pax`,
                method: 'PATCH',
                body: body
            })
        })
        //infinitesearch
    })
})

export const {
    useGetLiteLocationByIdQuery,
    useUpdatePaxMutation
} = locationApi;

