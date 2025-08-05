import {Paper, Text, Group, Progress, Grid, rem, Skeleton} from '@mantine/core';
import {useGetOccupancyStatusQuery} from "../../locationApi.ts";
import {useSeatingInfo} from "../../hooks/useOccupancyStatus.tsx";
import { Link } from '@tanstack/react-router';
import { theme } from '../../../../theme.ts';

interface GateInfoCardProps {
    gateId: number
    name: string
    capacity: number
}

export const NearbyGateInfoCard = ({ gateId, capacity, name }: GateInfoCardProps) => {
    const { data: liveStatus, isLoading, isError } = useGetOccupancyStatusQuery(gateId)
    const percent = (100 * (liveStatus?.pax ?? 0)) / (capacity || 1)
    const { statusLabel, fillColor, backgroundColor } = useSeatingInfo(percent)

    const paperStyle = {
        maxWidth: 170,
        boxShadow: theme.shadows!.md,
        transition: 'transform 150ms ease, box-shadow 150ms ease',
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: theme.shadows!.lg,
        },
    };

    if (isLoading) {
        return (
            <Paper withBorder p={14} radius="md" style={paperStyle}>
                <Grid align="center" gutter="sm">
                    <Grid.Col span={12} pl="xl">
                        <Skeleton height={20} width="60%" radius="sm" mb={4} />
                        <Skeleton height={14} width="90%" radius="sm" />
                    </Grid.Col>
                    <Grid.Col span={12} pl="lg" pr="xs">
                        <Skeleton height={rem(24)} radius={6} style={{ maxWidth: '90%' }} />
                    </Grid.Col>
                </Grid>
            </Paper>
        );
    }

    if (isError || !liveStatus) {
        return (
            <Paper
                withBorder
                p={14}
                radius="md"
                style={{ ...paperStyle, textDecoration: 'inherit', color: 'inherit'}}
            >
                <Grid align="center" gutter="sm">
                    <Grid.Col span={12} pl="xl">
                        <Group justify="space-between" wrap="nowrap">
                            <div>
                                <Text fw={470} size="md" td="underline">
                                    Gate {name}
                                </Text>
                                <Text size="xs" c="dimmed" mt={-2}>
                                    Live status utilgjengelig
                                </Text>
                            </div>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Paper>
        );
    }

    return (
        <Paper
            component={Link}
            to="/airport/location/$gateId"
            params={{ gateId: String(gateId) }}
            withBorder
            p={14}
            radius="md"
            style={{ ...paperStyle, cursor: 'pointer', textDecoration: 'inherit', color: 'inherit'}}
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
                        transitionDuration={200}
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