import type {TerminalLiteResponse} from "../terminal/types.ts";

export interface UpdateOccupancyRequest {
    id: number;
    newPax: number;
}

export interface LocationResponse {
    id: number
    name: string
    capacity: number
    type: string //TODO: typedto/enum
    terminal: TerminalLiteResponse
    nearbyLocations: LocationLiteResponse[]
}

export interface LocationLiteResponse {
    id: number
    name: string
    capacity: number
    type: string
}

export interface LocationOccupancyStatus {
    id: number
    pax: number
    updatedAt: string
    locationId: number
}

export interface LocationRelationshipResponse {
    id: number
    targetLocation: LocationLiteResponse
    walkingTimeInMinutes: number
}