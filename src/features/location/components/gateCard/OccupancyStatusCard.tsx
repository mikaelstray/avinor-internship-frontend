import { Paper, Text, Group, Progress, Stack } from '@mantine/core';
import { FaUsers } from 'react-icons/fa'; // Eksempel med react-icons

// Props for å gjøre komponenten dynamisk
interface OccupancyStatusCardProps {
    title: string;
    subtitle: string;
    description: string;
    occupancyPercent: number;
}

export const OccupancyStatusCard = ({
                                        title,
                                        subtitle,
                                        description,
                                        occupancyPercent
                                    }: OccupancyStatusCardProps) => {
    return (
        // 1. Hovedcontainer for kortet
        <Paper withBorder p="xl" radius="md">
            {/* 2. Stack for å stable alt innholdet vertikalt */}
            <Stack gap="md">
                {/* 3. Toppseksjon med tittel, undertittel og ikon */}
                <div>
                    <Group justify="space-between">
                        <Text size="xl" fw={700}>{title}</Text>
                        <FaUsers size={24} color="var(--mantine-color-gray-6)" />
                    </Group>
                    <Text size="sm" c="dimmed">{subtitle}</Text>
                </div>

                {/* 4. Progress-bar */}
                <Progress value={occupancyPercent} color="yellow" size="lg" radius="xl" />

                {/* 5. Beskrivelse nederst */}
                <Text size="sm">{description}</Text>
            </Stack>
        </Paper>
    );
};