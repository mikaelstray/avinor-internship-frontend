import {useParams} from "@tanstack/react-router";
import {FoodCard} from "./FoodCard.tsx";
import {useGetNearbyServingsByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyServingsRequest} from "../types.ts";
import {SimpleGrid, Skeleton} from "@mantine/core";

export const NearbyFoodComponent = () => {
    const { locationId } = useParams({ strict: false });
    const locationIdNumber = Number(locationId);

    const getServingsReq: GetNearbyServingsRequest = {
        locationId: locationIdNumber,
        sortBy: "walkingTime"
    }
    const { data: nearbyLocations, isLoading, error } = useGetNearbyServingsByLocationIdQuery(getServingsReq)
     console.log(nearbyLocations)

    if (isLoading) {
        return (
            <SimpleGrid cols={4}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} height={200} />
                ))}
            </SimpleGrid>
        );
    }

    if (error) {
        return <p>Kunne ikke laste inn steder i nærheten.</p>;
    }

    const locations = nearbyLocations ?? [];

    return (
        <>
            {locations.map((location) => (
                <FoodCard
                    key={location.targetLocation.id}
                    locationParentId={locationIdNumber}
                    nearbyId={location.targetLocation.id}
                />
            ))}
        </>
    );
}