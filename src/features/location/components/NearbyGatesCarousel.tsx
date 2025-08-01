import {useParams} from "@tanstack/react-router";
import {useGetNearbyGatesByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyGatesRequest} from "../types.ts";
import {NearbyGateInfoCard} from "./gateCard/NearbyGateInfoCard.tsx";
import { Skeleton, Title} from "@mantine/core";
import {Carousel} from "@mantine/carousel";


export const NearbyGatesCarousel = () => {
    const { locationId } = useParams({ strict: false })
    const locationIdNumber = Number(locationId)
    const getGatesReq: GetNearbyGatesRequest = {
        locationId: locationIdNumber,
        page: 0,
        size: 6,
        sortBy: "walkingTime"
    }

    const { data: gatesPage, isLoading } = useGetNearbyGatesByLocationIdQuery(getGatesReq) //TODO keepunused for lenge

    if (isLoading) {
        return (
            <div style={{ display: 'flex', gap: '16px', height: '100%' }}>
                <Skeleton visible height="100%" radius="md" style={{ flex: 1 }} />
                <Skeleton visible height="100%" radius="md" style={{ flex: 1 }} />
                <Skeleton visible height="100%" radius="md" style={{ flex: 1 }} />
            </div>
        );
    }

    const slides = (gatesPage?.content ?? []).map((relation) => (
        <Carousel.Slide key={relation.id}>
            <NearbyGateInfoCard name={relation.targetLocation.name} gateId={relation.targetLocation.id} capacity={relation.targetLocation.capacity} />
        </Carousel.Slide>
    ));

    return (
        <>
            <Title fw={500} ta="center" py="md" size="lg">Gater i nærheten</Title>
            <Carousel
                slideSize="33.3%"
                slideGap={1}
                withControls={false}
                withIndicators
                emblaOptions={{ loop: false, align: 'start', slidesToScroll: 3 }}
                styles={{
                    indicators: {
                        bottom: 'calc(-1 * var(--mantine-spacing-sm))',
                    },
                    indicator: {
                        backgroundColor: 'grey',
                    },
                }}
            >
                {slides}
            </Carousel>
        </>
    );
}