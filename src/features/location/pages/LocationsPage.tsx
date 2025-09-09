import {Center, Container, Divider, Grid, Loader, Paper, Stack, Title} from "@mantine/core";
import {SearchTitle} from "../../airport/components/SearchTitle.tsx";
import {QrCodeComponent} from "../../airport/components/QrCodeComponent.tsx";
import {NearbyGatesCarousel} from "../components/NearbyGatesCarousel.tsx";
import {GateCardContainer} from "../components/gateCard/GateCardContainer.tsx";
import {NearbyFoodCarousel} from "../components/NearbyFoodCarousel.tsx";
import {GateHeader} from "../components/gateHeader/GateHeader.tsx";
import {useGetLocationByIdQuery} from "../locationApi.ts";
import {useParams} from "@tanstack/react-router";

export const LocationsPage = () => {
    const { locationId} = useParams({ strict: false })
    const idNumber = Number(locationId)

    const { data: location, isLoading, isError } = useGetLocationByIdQuery(idNumber);

    if (isLoading) {
        return (
            <Center h="100vh">
                <Loader size="xl" />
            </Center>
        );
    }

    if (isError || !location) {
        return (
            <Center h="100vh">
                <Title order={1}>Lokasjon ikke funnet</Title>
            </Center>
        );
    }

    return (
        <Container fluid p="md">
            <Grid gutter="xl">
                <Grid.Col span="auto">
                    <Paper withBorder radius="md" p="xs" h="100%">
                        <Stack justify="space-between" h="100%">
                            <SearchTitle />
                            <QrCodeComponent url="https://www.youtube.com/watch?v=xvFZjo5PgG0" />
                        </Stack>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={10}>
                    <Paper withBorder radius="md" p={0}>
                        <GateHeader gateName={location.name} />
                        <Stack gap="xs" pl="md" pr="md" py="sm" pt={0}>
                            <Grid grow gutter="md" py="sm">
                                <Grid.Col span={4}>
                                    <GateCardContainer locationId={idNumber} capacity={location.capacity} />
                                </Grid.Col>
                                <Grid.Col span={2} pt={0}>
                                    <NearbyGatesCarousel locationId={idNumber} />
                                </Grid.Col>
                            </Grid>

                            <Center>
                                <Divider w="50%" />
                            </Center>

                            <NearbyFoodCarousel />
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>
    );
};