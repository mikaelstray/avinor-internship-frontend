import {Card, Image, Text, Stack, AspectRatio, Skeleton} from '@mantine/core';
import {useGetNearbyServingsByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyServingsRequest} from "../types.ts";
import {useParams} from "@tanstack/react-router";

interface FoodCardProps {
    nearbyId: number
}

export const FoodCard = ({ nearbyId }: FoodCardProps) => {
    const { locationId} = useParams({ strict: false })
    const req: GetNearbyServingsRequest = {
        locationId: locationId,
        sortBy: "walkingTime"
    }
    //send id as props and select serving location from cache to avoid rerendering entire list, could send fields as props for simplicity
    const { servingLocation } = useGetNearbyServingsByLocationIdQuery(req, {
        selectFromResult: ({ data }) => ({
            servingLocation: data?.find((servingRelation) => servingRelation.targetLocation.id === nearbyId),
        }),
    });

    const location = servingLocation?.targetLocation

    if (!location) {
        return <Skeleton height={190} width={200} radius="sm" />;
    }

    return (
        <Card shadow="xl" padding="md" radius="sm" withBorder w={200}>
            <Card.Section>
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={location?.imageUrl}
                        alt={`Bilde av mat fra ${location?.name}`}
                    />
                </AspectRatio>
            </Card.Section>

            <Stack mt="sm" gap={2}>
                <Text fw={500} size="md">{location?.name}</Text>
                <Text size="xs" c="dimmed">Åpent når det er flyvninger</Text>
            </Stack>
        </Card>
    );
};
