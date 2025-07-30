import {Center, Container, Divider, Grid, Stack} from "@mantine/core";
import {SearchTitle} from "../../airport/components/SearchTitle.tsx";
import {QrCodeComponent} from "../../airport/components/QrCodeComponent.tsx";
import {NearbyGatesCarousel} from "../components/NearbyGatesCarousel.tsx";
import {GateCardContainer} from "../components/gateCard/GateCardContainer.tsx";
import {NearbyFoodCarousel} from "../components/NearbyFoodCarousel.tsx";

export const LocationsPage = () => {
    return (
        <Container fluid p="md">
            <Grid gutter="xl">
                {/* VENSTRE KOLONNE */}
                <Grid.Col span="auto">
                    <Stack justify="space-between" h="100%">
                        <SearchTitle />
                        <QrCodeComponent url="https://www.avinor.no" />
                    </Stack>
                </Grid.Col>

                {/* HØYRE KOLONNE */}
                <Grid.Col span={10}>
                    <Stack gap="xl">
                        {/* TOPPSEKSJON */}
                        <Grid grow gutter="xl">
                            <Grid.Col span={6}>
                                <GateCardContainer />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <NearbyGatesCarousel />
                            </Grid.Col>
                        </Grid>

                        {/* MELLOMROM OG SKILLELINJE */}
                        <Center>
                            <Divider w="50%" />
                        </Center>

                        {/* BUNNSEKSJON */}
                        <NearbyFoodCarousel />
                    </Stack>

                </Grid.Col>
            </Grid>
        </Container>
    );
};