import { useGetLocationByIdQuery, useGetOccupancyStatusQuery} from "../locationApi.ts";
import {useNavigate, useParams, useRouter} from "@tanstack/react-router";
import {OccupancyShower} from "./OccupancyShower.tsx";

export const GateOccupancyCard = () => {
    const { locationId } = useParams({ strict: false })
    const locationIdNumber = Number(locationId)


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
        </>
    )
}