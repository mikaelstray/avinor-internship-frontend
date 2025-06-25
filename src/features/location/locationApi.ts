import {createEntityAdapter} from "@reduxjs/toolkit";
import type {LocationResponse} from "./types.ts";
import {baseApi} from "../../app/api.ts";

const locationAdapter = createEntityAdapter<LocationResponse>()

export const locationApi = baseApi.injectEndpoints({
    endpoints: builder => ({

    })
})