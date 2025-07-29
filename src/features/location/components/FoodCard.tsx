import {useAppSelector} from "../../../app/hooks.ts";
import {selectNearbyRelationshipById, useGetLocationByIdQuery} from "../locationApi.ts";


interface FoodCardProps {
    nearbyId: number
}

export const FoodCard = ({ nearbyId }: FoodCardProps) => {
    const { data: location } = useGetLocationByIdQuery(nearbyId) //TODO optimize
    const imageUrl = `https://picsum.photos/seed/${nearbyId}/400/200`;
    console.log(location)

    return (
        <div style={{ border: "1px solid #ccc", margin: "8px", width: "250px" }}>
            <img
                src={imageUrl}
                alt={`Bilde for ${location?.name}`}
                style={{ width: "100%" }}
            />
            <h4 style={{ padding: "8px" }}>{location?.name}</h4>
        </div>
    )
}