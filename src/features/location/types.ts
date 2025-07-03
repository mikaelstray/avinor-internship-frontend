import type {ZoneLiteResponse} from "../zone/types.ts";

export interface UpdateOccupancyRequest {
    id: number;
    newPax: number;
}

export interface LocationResponse {
    id: number
    name: string
    capacity: number
    type: string //TODO: typedto/enum
    zone: ZoneLiteResponse
}

export interface LocationLiteResponse {
    id: number
    name: string
}

export interface LocationOccupancyStatus {
    id: number
    pax: number
    updatedAt: string
}
