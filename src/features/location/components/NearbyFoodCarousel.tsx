import {useParams} from "@tanstack/react-router";
import {FoodCard} from "./FoodCard.tsx";
import {useGetNearbyServingsByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyServingsRequest} from "../types.ts";
import {Group, Paper, ScrollArea, Skeleton, Stack, Text, Title} from "@mantine/core";

export const NearbyFoodCarousel = () => {
    const { locationId } = useParams({ strict: false });
    const locationIdNumber = Number(locationId);

    const getServingsReq: GetNearbyServingsRequest = {
        locationId: locationIdNumber,
        sortBy: "walkingTime"
    }
    const { data: nearbyServingRelations, isLoading, isError } = useGetNearbyServingsByLocationIdQuery(getServingsReq)

    const hasData = nearbyServingRelations && nearbyServingRelations.length > 0;

    const renderContent = () => {
        if (isLoading) {
            return (
                <Group wrap="nowrap">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} style={{ width: 200 }}>
                            <Skeleton height={150} radius="md" />
                        </div>
                    ))}
                </Group>
            );
        }

        if (hasData) {
            return (
                <Group wrap="nowrap">
                    {nearbyServingRelations.map((relation) => (
                        <div key={relation.id} style={{ minWidth: 200 }}>
                            <FoodCard
                                nearbyId={relation.targetLocation.id}
                            />
                        </div>
                    ))}
                </Group>
            );
        }

        return (
            <Paper withBorder p="xl" radius="md" style={{ flexGrow: 1 }}>
                <Text ta="center" c="dimmed">
                    {isError
                        ? "Kunne ikke laste inn spisesteder i nærheten."
                        : "Fant ingen spisesteder i nærheten."}
                </Text>
            </Paper>
        );
    };

    return (
        <Stack gap="md">
            <Title fw={500} ta="center" py={4} size="md">Mat og servering i nærheten</Title>
            {isError || !hasData ? (
                renderContent()
            ) : (
                <ScrollArea h="100%" >
                    {renderContent()}
                </ScrollArea>
            )}
        </Stack>
    );

}