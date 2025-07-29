import {useParams} from "@tanstack/react-router";
import {useGetNearbyGatesByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyGatesRequest} from "../types.ts";
import {useState} from "react";

export const NearbyGatesComponent = () => {
    const { locationId } = useParams({ strict: false })
    const [page, setPage] = useState(0);
    const getGatesReq: GetNearbyGatesRequest = {
        locationId: locationId,
        page: page,
        size: 3,
        sortBy: "walkingTime"
    }

    const { data: gates, isLoading, error, isFetching } = useGetNearbyGatesByLocationIdQuery(getGatesReq) //TODO keepunused for lenge

    if (isLoading) return <p>Loading initial data...</p>;
    if (error) return <p>Oh no, there was an error</p>;

    const gatesList = gates?.content ?? [];
    const isFirstPage = gates?.first ?? true;
    const isLastPage = gates?.last ?? true;

    return (
        <div>
            {isFetching && <p>Fetching new data...</p>}

            <ul>
                {gatesList?.map(gate => (
                    <li key={gate.id}>
                        {gate.targetLocation.name} - ({gate.walkingTimeInMinutes} min)
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={() => setPage(p => p - 1)} disabled={isFirstPage}>
                    Previous
                </button>
                <span> Page {gates ? gates.number + 1 : 1} of {gates?.totalPages ?? 1} </span>
                <button onClick={() => setPage(p => p + 1)} disabled={isLastPage}>
                    Next
                </button>
            </div>
        </div>
    );
}