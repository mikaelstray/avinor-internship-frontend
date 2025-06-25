import type {AreaResponse} from "../area/types.ts";

export interface LocationOccupancyUpdate {
    id: string;
    newPax: number;
}

export interface LocationResponse {
    id: number
    name: string
    capacity: number
    type: string //TODO: typedto/enum
    area: AreaResponse
}