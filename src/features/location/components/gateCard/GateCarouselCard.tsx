import { Paper, Text, Title, Group } from '@mantine/core';
import classes from './GateCarouselCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

interface GateCarouselCardProps {
    gateName: string;
    statusText: string;
    imageUrl: string;
}

export function GateCarouselCard({ gateName, statusText, imageUrl }: GateCarouselCardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${imageUrl})` }}
            className={classes.card}
        >
            <div>
                <Title order={3} className={classes.title}>
                    Gate {gateName}
                </Title>
                <Text className={classes.status}>
                    {statusText}
                </Text>
            </div>
            <Group justify="flex-end" w="100%">
                <FaArrowRight size={24} color="white" style={{ position: 'relative' }} />
            </Group>
        </Paper>
    );
}