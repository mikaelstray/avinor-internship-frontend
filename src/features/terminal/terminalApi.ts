import {baseApi} from "../../app/api.ts";
import type {TerminalLiteResponse} from "./types.ts";

export const terminalApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getLiteTerminalsForAirport: builder.query<TerminalLiteResponse[], number>({
            query: () => `/terminals`
        })
    })
})

export const {
    useGetLiteAirportsQuery
} = airportApi;