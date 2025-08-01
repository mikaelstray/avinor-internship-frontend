import {useParams} from "@tanstack/react-router";
import {useGetNearbyGatesByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyGatesRequest} from "../types.ts";
import {useState} from "react";
import {NearbyGateInfoCard} from "./gateCard/NearbyGateInfoCard.tsx";
import {ActionIcon, Group, SimpleGrid, Skeleton, Stack, Text, Title} from "@mantine/core";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {Carousel} from "@mantine/carousel";
import {GateCarouselCard} from "./gateCard/GateCarouselCard.tsx";
import {NearbyGateCard} from "./gateCard/NearbyGateCard.tsx";

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
            <NearbyGateInfoCard name={gate.targetLocation.name} gateId={gate.targetLocation.id} capacity={gate.targetLocation.capacity} />
        </Carousel.Slide>
    ));

    return (
        <>
            <Title fw={400} size="md">Gater i nærheten</Title>
            <Carousel
                slideSize="33.333333%"
                slideGap="xs"
                withControls={true}
                withIndicators
                emblaOptions={{ loop: false, align: 'start', slidesToScroll: 3 }}
            >
                {slides}
            </Carousel>
        </>
    );
}