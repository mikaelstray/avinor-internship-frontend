import {baseApi} from "../../app/api.ts";
import type {AirportLiteResponse} from "./types.ts";
import type {TerminalLiteResponse} from "../terminal/types.ts";

export const airportApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLiteAirports: builder.query<AirportLiteResponse[], void>({
            query: () => `/airports`
        }),
        getTerminalsByAirportIata: builder.query<TerminalLiteResponse[], string>({
            query: (airportIata) => `airports/${airportIata}/terminals`,
            //TODO: transformResponse
        })
    })
})

export const {
    useGetLiteAirportsQuery,
    useGetTerminalsByAirportIataQuery
} = airportApi;