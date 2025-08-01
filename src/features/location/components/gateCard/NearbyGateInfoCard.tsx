import {Paper, Text, Group, Progress, Grid, rem} from '@mantine/core';
import {useGetOccupancyStatusQuery} from "../../locationApi.ts";
import {useSeatingInfo} from "../../hooks/useOccupancyStatus.tsx";
import { Link } from '@tanstack/react-router';

interface GateInfoCardProps {
    gateId: number
    name: string
    capacity: number
}

export const NearbyGateInfoCard = ({ gateId, capacity, name }: GateInfoCardProps) => {
    const { data: liveStatus } = useGetOccupancyStatusQuery(gateId)
    const percent = (100 * (liveStatus?.pax ?? 0)) / (capacity || 1)
    const { statusLabel, fillColor, backgroundColor } = useSeatingInfo(percent)

    return (
        <Paper
            component={Link}
            to="/airport/location/$gateId"
            params={{ gateId }}
            withBorder
            p={14}
            radius="md"
            style={{ cursor: 'pointer', textDecoration: 'inherit', color: 'inherit', maxWidth: 170}}
        >
            <Grid align="center" gutter="sm">
                <Grid.Col span={12} pl="xl">
                    <Group justify="space-between" wrap="nowrap">
                        <div>
                            <Text fw={470} size="md" td="underline">
                                Gate {name}
                            </Text>
                            <Text size="xs" c="dimmed" mt={-2}>
                                {statusLabel}
                            </Text>
                        </div>
                    </Group>
                </Grid.Col>

                <Grid.Col span={12} pl="lg" pr="xs">
                    <Progress
                        value={percent}
                        size="sm"
                        radius={6}
                        color={fillColor}
                        style={{ height: rem(24), maxWidth: '90%' }}
                        styles={{
                            root: {
                                backgroundColor: backgroundColor,
                            },
                            bar: {
                                borderRadius: rem(6),
                                transition: 'none',
                            },
                        }}
                    />
                </Grid.Col>
            </Grid>
        </Paper>
    );
};