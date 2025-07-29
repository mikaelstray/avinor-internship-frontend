import { useGetLocationByIdQuery, useGetOccupancyStatusQuery} from "../locationApi.ts";
import {Paper, Skeleton, Stack, Text} from "@mantine/core";
import { useParams } from "@tanstack/react-router";

export const GateOccupancyCard = () => {
    const { locationId } = useParams({ strict: false });
    const locationIdNumber = Number(locationId);

    const {
        data: location,
        isLoading: isLocationLoading,
        error: locationError
    } = useGetLocationByIdQuery(locationIdNumber);

    const {
        data: livePax,
        isLoading: isLiveLoading,
        error: livePaxError
    } = useGetOccupancyStatusQuery(locationIdNumber);

    if (isLocationLoading || isLiveLoading) {
        return (
            <Paper withBorder p="md">
                <Skeleton height={20} width="40%" mb="sm" />
                <Skeleton height={15} width="60%" />
            </Paper>
        );
    }

    if (locationError || livePaxError) {
        return <Paper withBorder p="md"><Text c="red">Kunne ikke laste data.</Text></Paper>;
    }

    return (
        <Paper withBorder p="md">
            <Stack>
                <Text fw={700} size="lg">{location!.name}</Text>
                {livePax?.available ? (
                    <GateCard
                        gateName={location.name}
                        availability={availabilityText}
                        availabilityLevel={percent}
                    />
                ) : (
                    <Text c="dimmed">Ingen live status tilgjengelig.</Text>
                )}
            </Stack>
        </Paper>
    );
}