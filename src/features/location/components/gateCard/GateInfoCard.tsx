import { Paper, Text, Group, Progress, Grid } from '@mantine/core';
import { FaArrowRight } from 'react-icons/fa';

interface GateInfoCardProps {
    gateName: string;
    statusText: string;
    occupancyPercent: number;
    walkTime: number;
}

//TODO hent fra cache ikke props

export const GateInfoCard = ({ gateName, statusText, occupancyPercent, walkTime }: GateInfoCardProps) => {
    return (
        <Paper withBorder p="md" radius="md">
            {/* 1. Hovedlayouten er nå en Grid for mer presis kontroll */}
            <Grid align="center" gutter="sm">

                {/* 2. Topprad med navn, status og pil */}
                <Grid.Col span={12}>
                    <Group justify="space-between" wrap="nowrap">
                        <div>
                            <Text fw={400} size="sm" td="underline" style={{ cursor: 'pointer' }}>
                                Gate {gateName}
                            </Text>
                            <Text size="xs" c="dimmed" mt={-2}>
                                {statusText}
                            </Text>
                        </div>
                        <FaArrowRight size={20} style={{ cursor: 'pointer' }} />
                    </Group>
                </Grid.Col>

                {/* 3. Bunnrad med progress-bar og gåtid side om side */}
                <Grid.Col span={8}>
                    <Progress
                        value={occupancyPercent}
                        color="green"
                        radius="xl"
                        size="xl"
                    />

                    {/* 4. Gå-tid, nå plassert under progress-baren */}
                    <Text size="xs" ta="left">
                        {walkTime} min å gå
                    </Text>
                </Grid.Col>

            </Grid>
        </Paper>
    );
};