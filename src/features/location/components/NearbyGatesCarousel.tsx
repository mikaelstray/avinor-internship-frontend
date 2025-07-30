import {useParams} from "@tanstack/react-router";
import {useGetNearbyGatesByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyGatesRequest} from "../types.ts";
import {useState} from "react";
import {GateInfoCard} from "./gateCard/GateInfoCard.tsx";
import {ActionIcon, Group, SimpleGrid, Skeleton, Stack, Text} from "@mantine/core";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {Carousel} from "@mantine/carousel";
import {GateCarouselCard} from "./gateCard/GateCarouselCard.tsx";

export const NearbyGatesCarousel = () => {
    const { locationId } = useParams({ strict: false })
    const locationIdNumber = Number(locationId)
    const getGatesReq: GetNearbyGatesRequest = {
        locationId: locationIdNumber,
        page: 0,
        size: 9,
        sortBy: "walkingTime"
    }

    const { data: gatesPage, isLoading, error, isFetching } = useGetNearbyGatesByLocationIdQuery(getGatesReq) //TODO keepunused for lenge

    if (isLoading) {
        return (
            <div style={{ display: 'flex', gap: '16px', height: '100%' }}>
                <Skeleton visible height="100%" radius="md" style={{ flex: 1 }} />
                <Skeleton visible height="100%" radius="md" style={{ flex: 1 }} />
                <Skeleton visible height="100%" radius="md" style={{ flex: 1 }} />
            </div>
        );
    }

    const slides = (gatesPage?.content ?? []).map((gate) => (
        <Carousel.Slide key={gate.id}>
            <GateInfoCard
                gateName={gate.targetLocation.name}
                statusText="Mye ledig" // Bør hentes fra ekte data
                occupancyPercent={25}
                walkTime={gate.walkingTimeInMinutes}
            />
        </Carousel.Slide>
    ));

    return (
        <Carousel slideSize="33.333333%" slideGap="md" align="start" loop withControls={false} withIndicators>
            {slides}
        </Carousel>
    );
}