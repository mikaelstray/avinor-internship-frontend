import {useParams} from "@tanstack/react-router";
import {useGetNearbyLocationsByIdQuery} from "../locationApi.ts";
import {FoodCard} from "./FoodCard.tsx";

export const NearbyFoodComponent = () => {
    const { locationId } = useParams({ strict: false })
    const { data: nearbyLocations } = useGetNearbyLocationsByIdQuery(locationId)
    const nearbyIds = nearbyLocations?.ids ?? []

    return (
        <>
        {nearbyIds.map((id) => (
            <FoodCard key={id} nearbyId={id} locationParentId={locationId}/>
            ))}
        </>
    )
}