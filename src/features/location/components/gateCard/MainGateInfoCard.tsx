import { Paper, Text, Group, Progress, Stack } from '@mantine/core';
import { FaUsers } from 'react-icons/fa';
import {useSeatingInfo} from "../../hooks/useOccupancyStatus.tsx";

interface OccupancyStatusCardProps {
    occupancyPercent: number;
}

export const MainGateInfoCard = ({ occupancyPercent }: OccupancyStatusCardProps) => {

    const { title, description, statusLabel, icon } = useSeatingInfo(occupancyPercent)
    return (
        // 1. Hovedcontainer for kortet
        <Paper withBorder p="xl" radius="md">
            {/* 2. Stack for å stable alt innholdet vertikalt */}
            <Stack gap="md">
                {/* 3. Toppseksjon med tittel, undertittel og ikon */}
                <div>
                    <Group justify="space-between">
                        <Text size="xl" fw={450}>{title}</Text>
                        {icon}
                    </Group>
                    <Text size="xs" c="dimmed">{statusLabel}</Text>
                </div>

                {/* 4. Progress-bar */}
                <Progress value={occupancyPercent} color="yellow" size="lg" radius="xl" transitionDuration={200} />

                {/* 5. Beskrivelse nederst */}
                <Text size="sm">{description}</Text>
            </Stack>
        </Paper>
    );
};