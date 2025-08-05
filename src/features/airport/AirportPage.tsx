import {useParams} from "@tanstack/react-router";
import {TerminalList} from "../terminal/components/TerminalList.tsx";
import {LocationSearch} from "../location/components/LocationSearch.tsx";
import { Container, Flex, Grid, Paper } from "@mantine/core";
import {QrCodeComponent} from "./components/QrCodeComponent.tsx";
import {SearchTitle} from "./components/SearchTitle.tsx";

export const AirportPage = () => {
    const { airportIata } = useParams({ strict: false })

    return (
        <Container
            fluid
            py="xl"
            px="xl"
            style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
            <Grid gutter="xl" style={{ flex: 1 }}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper withBorder p="xl" radius="md" shadow="sm" h="100%">
                        <Flex direction="column" align="center" gap="xl" h="100%">

                            <SearchTitle />
                            <LocationSearch airportIata={airportIata} />

                            <Flex direction="column" align="center" mt="lg" gap="sm">
                                <QrCodeComponent url="https://www.youtube.com/watch?v=xvFZjo5PgG0" />
                            </Flex>
                        </Flex>
                    </Paper>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper withBorder p="xl" radius="md" shadow="sm" h="100%">
                        <Flex direction="column" gap="lg">
                            <TerminalList airportIata={airportIata} />
                        </Flex>
                    </Paper>
                </Grid.Col>
            </Grid>
        </Container>
    );
}