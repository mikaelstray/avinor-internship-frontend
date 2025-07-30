import {Container, Grid, Stack} from "@mantine/core";
import {SearchTitle} from "../../airport/components/SearchTitle.tsx";
import {QrCodeComponent} from "../../airport/components/QrCodeComponent.tsx";
import {NearbyGatesComponent} from "../components/NearbyGatesComponent.tsx";
import {NearbyFoodComponent} from "../components/NearbyFoodComponent.tsx";
import {GateCardContainer} from "../components/gateCard/GateCardContainer.tsx";
import { GateHeader } from "../components/gateHeader/GateHeader";

export const LocationsPage = () => { //TODO optimistic update
    return (
        <Container fluid p="xl">
            <Grid gutter="xl">

                <Grid.Col span={{ base: 12, lg: 4 }}>
                    <Stack>
                        <SearchTitle />
                        <QrCodeComponent url="google.com" />
                    </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, lg: 8 }}>
                    <Grid gutter="xl">

                <Grid.Col span={12}>
                    <GateHeader gateName={`Gate ${location.name}`} />
                    </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 7 }}>
                            <GateCardContainer />
                        </Grid.Col>

                        <Grid.Col span={{ base: 12, md: 5 }}>
                            <NearbyGatesComponent />
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <NearbyFoodComponent />
                        </Grid.Col>
                    </Grid>
                </Grid.Col>

            </Grid>
        </Container>
    );
}