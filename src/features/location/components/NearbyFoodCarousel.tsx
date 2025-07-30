import {useParams} from "@tanstack/react-router";
import {FoodCard} from "./FoodCard.tsx";
import {useGetNearbyServingsByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyServingsRequest} from "../types.ts";
import {Group, ScrollArea, SimpleGrid, Skeleton, Stack, Title} from "@mantine/core";

export const NearbyFoodCarousel = () => {
    const { locationId } = useParams({ strict: false });
    const locationIdNumber = Number(locationId);

    const getServingsReq: GetNearbyServingsRequest = {
        locationId: locationIdNumber,
        sortBy: "walkingTime"
    }
    const { data: nearbyLocations, isLoading } = useGetNearbyServingsByLocationIdQuery(getServingsReq)

    if (isLoading) {
        return (
            <div style={{ display: 'flex', gap: '16px' }}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton key={index} height={220} width={280} radius="md" />
                ))}
            </div>
        );
    }

    return (
        <Stack gap="md">
            <Title order={2}>Mat i nærheten</Title>
            <ScrollArea h="100%">
                <Group wrap="nowrap">
                    {(nearbyLocations ?? []).map((location) => (
                        <div key={location.id} style={{ minWidth: 200 }}>
                            <FoodCard
                                title={location.targetLocation.name}
                                description="Åpent når det er flyvninger"
                                imageUrl={`https://picsum.photos/seed/${location.targetLocation.id}/400/250`}
                            />
                        </div>
                    ))}
                </Group>
            </ScrollArea>
        </Stack>
    );

}