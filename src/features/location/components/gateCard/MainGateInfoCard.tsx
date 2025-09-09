import {Paper, Text, Group, Progress, Stack, rem} from '@mantine/core';
import {useSeatingInfo} from "../../hooks/useOccupancyStatus.tsx";

interface OccupancyStatusCardProps {
    occupancyPercent: number;
}

export const MainGateInfoCard = ({ occupancyPercent }: OccupancyStatusCardProps) => {

    const { title, description, icon, fillColor, backgroundColor } = useSeatingInfo(occupancyPercent)
    return (
        <Paper withBorder p="lg" radius="md" style={{ height: rem(170), width: rem(450)}}>
            <Stack gap="sm">
                <div>
                    <Group justify="space-between">
                        <Text size="xl" fw={450}>{title}</Text>
                        {icon}
                    </Group>
                    <Text size="xs" c="dimmed">Estimert ledig sitteplass</Text>
                </div>

                <Progress
                    value={occupancyPercent}
                    size="xl"
                    transitionDuration={200}
                    radius={8}
                    color={fillColor}
                    style={{ height: rem(28) }}
                    styles={{
                        root: {
                            backgroundColor: backgroundColor,
                        },
                    }}
                />
                <Text size="sm" lineClamp={2} mih={rem(44)}>
                    {description}
                </Text>
            </Stack>
        </Paper>
    );
}