import { Card, Image, Text, Stack, AspectRatio } from '@mantine/core';

// Props for å gjøre komponenten dynamisk
interface FoodCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export const FoodCard = ({ title, description, imageUrl }: FoodCardProps) => {
    return (
        <Card shadow="sm" padding="md" radius="md" withBorder w={200}>
            <Card.Section>
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={imageUrl}
                        alt={`Bilde av mat fra ${title}`}
                    />
                </AspectRatio>
            </Card.Section>

            <Stack mt="sm" gap={2}>
                <Text fw={500} size="md">{title}</Text>
                <Text size="xs" c="dimmed">{description}</Text>
            </Stack>
        </Card>
    );
};
