import {useGetNearbyGatesByLocationIdQuery} from "../locationApi.ts";
import type {GetNearbyGatesRequest} from "../types.ts";
import {NearbyGateInfoCard} from "./gateCard/NearbyGateInfoCard.tsx";
import {Paper, rem, Skeleton, Stack, Text, Title} from "@mantine/core";
import {Carousel} from "@mantine/carousel";
import {theme} from "../../../theme.ts";

interface NearbyGatesCarouselProps {
    locationId: number
}

export const NearbyGatesCarousel = ({ locationId }: NearbyGatesCarouselProps) => {
    const getGatesReq: GetNearbyGatesRequest = {
        locationId: locationId,
        page: 0,
        size: 6,
        sortBy: "walkingTime"
    }

    const { data: gatesPage, isLoading, isError } = useGetNearbyGatesByLocationIdQuery(getGatesReq)
    const gates = gatesPage?.content ?? [];

    const showEmptyOrErrorState = !isLoading && (isError || gates.length === 0);

    return (
        <Stack>
            <Title fw={500} ta="center" py="md" size="lg">Sitteplasser på gater i nærheten</Title>

            {showEmptyOrErrorState ? (
                <Paper withBorder p="xl" radius="md">
                    <Text ta="center" c="dimmed">
                        {isError
                            ? "Kunne ikke laste inn data for nærliggende gater."
                            : "Ingen nærliggende gater funnet."}
                    </Text>
                </Paper>
            ) : (
                <Carousel
                    slideSize="33.3333%"
                    slideGap="md"
                    withControls={false}
                    withIndicators
                    style={{ width: rem(480) }}
                    emblaOptions={{ loop: false, align: 'start', slidesToScroll: 3 }}
                    styles={{
                        indicators: { bottom: 'calc(-1 * var(--mantine-spacing-xs))' },
                        indicator: { backgroundColor: 'grey' },

                    }}
                >
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <Carousel.Slide key={index} pb="md">
                                <Skeleton height={110} radius="md" />
                            </Carousel.Slide>
                        ))
                    ) : (
                        gates.map((relation) => (
                            <Carousel.Slide key={relation.id} pb="md">
                                <NearbyGateInfoCard
                                    name={relation.targetLocation.name}
                                    gateId={relation.targetLocation.id}
                                    capacity={relation.targetLocation.capacity}
                                />
                            </Carousel.Slide>
                        ))
                    )}
                </Carousel>
            )}
        </Stack>
    );
}