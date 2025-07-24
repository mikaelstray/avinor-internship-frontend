import { useGetLocationByIdQuery, useGetOccupancyStatusQuery} from "../locationApi.ts";
import {useNavigate, useParams} from "@tanstack/react-router";
import {OccupancyShower} from "../components/OccupancyShower.tsx";
import {UpdatePax} from "../test/UpdatePax.tsx";

export const LocationPage = () => {
    const { locationId } = useParams({ strict: false })
    const locationIdNumber = Number(locationId)
    const navigate = useNavigate()

    const { data: location, isLoading: isLocationLoading } = useGetLocationByIdQuery(locationIdNumber)
    const { data: livePax, isLoading: isLiveLoading } = useGetOccupancyStatusQuery(locationIdNumber)

    if (!livePax || !location) {
        return "null" //TODO improve
    }

    const percent = 100 * livePax?.pax / location?.capacity;

    //TODO: tanstack loader? and error handling

    return (
        <>
            <p>{location?.name}</p>
            <p>{livePax?.pax ?? 'No live pax'} av kapasitet: {location?.capacity}</p>
            <OccupancyShower percent={percent} />
            <h3>Nærliggende lokasjoner:</h3>
            <ul>
                {location.nearbyLocations?.map(nearby => (
                    <li key={nearby.id}>
                        {nearby.name}
                    </li>
                ))}
            </ul>
        </>
    )
}