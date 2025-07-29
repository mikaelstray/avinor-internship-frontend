import {useAppSelector} from "../../../app/hooks.ts";
import {selectNearbyRelationshipById} from "../locationApi.ts";


interface FoodCardProps {
    nearbyId: number
    locationParentId: number
}

export const FoodCard = ({ nearbyId, locationParentId }: FoodCardProps) => {
    const nearbyLocation = useAppSelector(state => selectNearbyRelationshipById(state, locationParentId, nearbyId))
    console.log(nearbyLocation)

    return (
        <>
            <p>{nearbyLocation?.id}: {nearbyLocation?.targetLocation.name}: {nearbyLocation?.walkingTimeInMinutes} <br/></p>
        </>
    )
}