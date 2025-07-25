import {useParams} from "@tanstack/react-router";
import {TerminalList} from "../terminal/components/TerminalList.tsx";
import {LocationSearch} from "../location/components/LocationSearch.tsx";
import {Box, Container, Flex, Grid, Paper, Text, Title} from "@mantine/core";
import {QrCodeComponent} from "./components/QrCodeComponent.tsx";
import {GiCongress} from "react-icons/gi";

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
                            <Box ta="center">
                                <Title order={2} c="var(--ds-color-text-default)" fz={32}>
                                    Finn ledig sitteplass
                                </Title>
                                <Text size="xl" c="var(--ds-color-text-default)" mt={4}>
                                    ved din gate!
                                </Text>
                            </Box>

                            <LocationSearch airportIata={airportIata} />

                            <Flex direction="column" align="center" mt="lg" gap="sm">
                                <QrCodeComponent />
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