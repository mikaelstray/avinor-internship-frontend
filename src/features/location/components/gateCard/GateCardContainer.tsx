import { useGetLocationByIdQuery, useGetOccupancyStatusQuery} from "../locationApi.ts";
import {useNavigate, useParams, useRouter} from "@tanstack/react-router";
import { GateCard } from "../components/GateCard/nearbyGateCard.tsx";

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

    let availabilityText = "Mye ledig";
    if (percent > 70) availabilityText = "Lite ledig";
    else if (percent > 40) availabilityText = "Noe ledig";

    return (
        <GateCard
        gateName={location.name}
        availability={availabilityText}
        availabilityLevel={percent}
        />
    );
};
