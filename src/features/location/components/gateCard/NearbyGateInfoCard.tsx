import {Paper, Text, Group, Progress, Grid, rem} from '@mantine/core';
import { FaArrowRight } from 'react-icons/fa';
import {useGetOccupancyStatusQuery} from "../../locationApi.ts";
import {useSeatingInfo} from "../../hooks/useOccupancyStatus.tsx";
import { Link } from '@tanstack/react-router';

interface GateInfoCardProps {
    gateId: number
    name: string
    capacity: number
}

//TODO hent fra cache ikke props

export const NearbyGateInfoCard = ({ gateId, capacity, name }: GateInfoCardProps) => {
    const { data: liveStatus } = useGetOccupancyStatusQuery(gateId)
    const percent = (100 * (liveStatus?.pax ?? 0)) / (capacity || 1)
    const { statusLabel, fillColor, backgroundColor } = useSeatingInfo(percent)

    return (
        <Paper
            // 2. Gjør Paper om til en Link-komponent
            component={Link}
            // 3. Gi den Link-props for navigasjon
            to="/airport/location/$gateId" // NB! Endre til din faktiske rute
            params={{ gateId }}
            // Standard Paper-props
            withBorder
            p="md"
            radius="md"
            // Gjør kortet klikkbart
            style={{ cursor: 'pointer', textDecoration: 'inherit', color: 'inherit'}}
        >
            {/* 1. Hovedlayouten er nå en Grid for mer presis kontroll */}
            <Grid align="center" gutter="sm">

                {/* 2. Topprad med navn, status og pil */}
                <Grid.Col span={12}>
                    <Group justify="space-between" wrap="nowrap">
                        <div>
                            <Text fw={400} size="sm" td="underline" style={{ cursor: 'pointer' }}>
                                Gate {name}
                            </Text>
                            <Text size="xs" c="dimmed" mt={-2}>
                                {statusLabel}
                            </Text>
                        </div>
                    </Group>
                </Grid.Col>

                {/* 3. Bunnrad med progress-bar og gåtid side om side */}
                <Grid.Col span={8}>
                    <Progress
                        value={percent}
                        size="md"
                        radius={6}
                        color={fillColor}
                        style={{ height: rem(24) }}
                        styles={{
                            root: {
                                backgroundColor: backgroundColor,
                            },
                            bar: {
                                borderRadius: rem(6),
                                transition: "none",
                            },
                        }}
                    />
                </Grid.Col>

            </Grid>
        </Paper>
    );
};