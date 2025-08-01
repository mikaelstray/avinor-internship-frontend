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
    const { data: nearbyServingRelations, isLoading } = useGetNearbyServingsByLocationIdQuery(getServingsReq)

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
            <Title fw={500} ta="center" py="xs" size="lg">Gater i nærheten</Title>
            <ScrollArea h="100%">
                <Group wrap="nowrap">
                    {(nearbyServingRelations ?? []).map((relation) => (
                        <div key={relation.id} style={{ minWidth: 200 }}>
                            <FoodCard
                                key={relation.targetLocation.id}
                                nearbyId={relation.targetLocation.id}
                            />
                        </div>
                    ))}
                </Group>
            </ScrollArea>
        </Stack>
    );

}