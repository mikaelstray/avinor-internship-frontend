import {baseApi} from "../../app/api.ts";
import type {AirportLiteResponse} from "./types.ts";
import type { TerminalResponse} from "../terminal/types.ts";
import type {LocationLiteResponse, } from "../location/types.ts";

export const airportApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLiteAirports: builder.query<AirportLiteResponse[], void>({
            query: () => `/airports`
        }),
        getTerminalsByAirportIata: builder.query<TerminalResponse[], string>({
            query: (airportIata) => `airports/${airportIata}/terminals`,
        }),
        getLiteGatesByAirportIata: builder.query<LocationLiteResponse[], string>({
            query: (airportIata) => `airports/${airportIata}/gates`
        }),
    })
})

export const {
    useGetLiteAirportsQuery,
    useGetTerminalsByAirportIataQuery,
    useGetLiteGatesByAirportIataQuery
} = airportApi;