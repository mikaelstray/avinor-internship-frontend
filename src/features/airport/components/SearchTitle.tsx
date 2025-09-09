import {Box, Text, Title} from "@mantine/core";

export const SearchTitle = () => {
    return (
        <Box ta="center">
            <Title order={2} c="var(--ds-color-text-default)" fz={32}>
                Finn ledig sitteplass
            </Title>
            <Text size="xl" c="var(--ds-color-text-default)" mt={4}>
                ved din gate!
            </Text>
        </Box>
    )
}