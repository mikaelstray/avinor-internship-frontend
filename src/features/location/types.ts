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
    available: boolean
    id: number
    pax?: number
    updatedAt?: string
    locationId: number
}

export interface LocationRelationshipResponse {
    id: number
    targetLocation: LocationLiteResponse
    walkingTimeInMinutes: number
}

export interface GetNearbyGatesRequest {
    locationId: number
    page: number
    size: number
    sortBy: Sort
}

export interface GetNearbyServingsRequest {
    locationId: number
    sortBy: Sort
}

export type Sort = 'walkingTime' | 'name';

export interface ApiPageResponse<T> {
    content: T[]
    totalPages: number;
    totalElements: number;
    number: number;
    last: boolean;
    first: boolean;
    size: number;
}

