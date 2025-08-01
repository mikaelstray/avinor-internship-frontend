import { useParams } from "@tanstack/react-router";
import { Paper, Skeleton, Text } from "@mantine/core";
import { useGetLocationByIdQuery, useGetOccupancyStatusQuery } from "../../locationApi.ts";
import { MainGateInfoCard } from "./MainGateInfoCard.tsx";
import {GateHeader} from "../gateHeader/GateHeader.tsx";

export const GateCardContainer = () => {
    const { locationId } = useParams({ strict: false });
    const locationIdNumber = Number(locationId);

    const { data: location, isLoading: isLocationLoading } = useGetLocationByIdQuery(locationIdNumber);
    const { data: livePax, isLoading: isLiveLoading } = useGetOccupancyStatusQuery(locationIdNumber);

    if (isLocationLoading || isLiveLoading) {
        return <Skeleton height={200} radius="md" />;
    }

    if (!location) {
        return <Paper withBorder p="md"><Text c="red">Fant ikke lokasjon.</Text></Paper>;
    }

    if (!livePax?.available) {
        return <Paper withBorder p="md"><Text c="dimmed">Ingen live status tilgjengelig.</Text></Paper>;
    }

    const occupancyPercent = (100 * (livePax.pax ?? 0)) / (location.capacity || 1);

    return (
        <>
            <GateHeader gateName={location.name} />
            {/* <MainGateCard gateName={location.name} availabilityLevel={80} /> */}
            <MainGateInfoCard occupancyPercent={occupancyPercent} />
        </>
    );
}