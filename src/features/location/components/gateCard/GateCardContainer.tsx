import { useParams } from "@tanstack/react-router";
import {Paper, rem, Skeleton, Text} from "@mantine/core";
import { useGetLocationByIdQuery, useGetOccupancyStatusQuery } from "../../locationApi.ts";
import { MainGateInfoCard } from "./MainGateInfoCard.tsx";

interface GateCardContainerProps {
    locationId: number
    capacity: number
}

export const GateCardContainer = ({ locationId, capacity }: GateCardContainerProps) => {

    const { data: livePax, isLoading: isLiveLoading } = useGetOccupancyStatusQuery(locationId);

    if (isLiveLoading) {
        return <Skeleton height={170} radius="md" />;
    }

    if (!livePax?.available) {
        return <Paper withBorder p="md"><Text c="dimmed" style={{ height: rem(150), width: rem(450)}}>Ingen live status tilgjengelig.</Text></Paper>;
    }

    const occupancyPercent = (100 * (livePax.pax ?? 0)) / (capacity || 1);
    console.log(occupancyPercent)

    return (
        <>
            <MainGateInfoCard occupancyPercent={occupancyPercent} />
        </>
    );
}