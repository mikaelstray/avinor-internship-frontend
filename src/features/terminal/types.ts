import type {LocationLiteResponse} from "../location/types.ts";

export interface TerminalLiteResponse {
    id: number;
    name: string;
}

export interface TerminalResponse {
    id: number,
    name: string,
    locations: LocationLiteResponse[]
}