import {Center, Container, Divider, Grid, Stack} from "@mantine/core";
import {SearchTitle} from "../../airport/components/SearchTitle.tsx";
import {QrCodeComponent} from "../../airport/components/QrCodeComponent.tsx";
import {NearbyGatesCarousel} from "../components/NearbyGatesCarousel.tsx";
import {GateCardContainer} from "../components/gateCard/GateCardContainer.tsx";
import {NearbyFoodCarousel} from "../components/NearbyFoodCarousel.tsx";
import {GateHeader} from "../components/gateHeader/GateHeader.tsx";

export const LocationsPage = () => {
    return (
        <Container fluid p="md">
            <Grid gutter="xl">
                <Grid.Col span="auto">
                    <Stack justify="space-between" h="100%">
                        <SearchTitle />
                        <QrCodeComponent url="https://www.avinor.no" />
                    </Stack>
                </Grid.Col>

                <Grid.Col span={10}>
                    <Stack gap="xs">
                        <GateHeader gateName="E12" />
                        <Grid grow gutter="md" py="sm">
                            <Grid.Col span={4}>
                                <GateCardContainer />
                            </Grid.Col>
                            <Grid.Col span={2} pt={6}>
                                <NearbyGatesCarousel />
                            </Grid.Col>
                        </Grid>

                        <Center>
                            <Divider w="50%" />
                        </Center>

                        <NearbyFoodCarousel />
                    </Stack>

                </Grid.Col>
            </Grid>
        </Container>
    );
};