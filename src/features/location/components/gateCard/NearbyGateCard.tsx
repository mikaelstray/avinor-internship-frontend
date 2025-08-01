import { Box, Card, Stack, Text, Title, Progress, rem } from "@mantine/core";
import {useGetOccupancyStatusQuery} from "../../locationApi.ts";
import {useSeatingInfo} from "../../hooks/useOccupancyStatus.tsx";

interface GateCardProps {
    gateId: number;
    gateName: string;
    capacity: number;
}

export const NearbyGateCard = ({gateId, gateName, capacity }: GateCardProps) => {
    const { data: liveStatus } = useGetOccupancyStatusQuery(gateId)
    const percent = (100 * (liveStatus?.pax ?? 0)) / (capacity || 1)
    const { statusLabel } = useSeatingInfo(percent)

    const fillColor = getFillColor(percent);
    const borderColor = getBorderColor(percent);
    const backgroundColor = getBackgroundColor(percent);

    return (
        <Card
            shadow="sm"
            padding="sm"
            radius="md"
            withBorder
            style={{
                width: "100%",
                background: "var(--ds-color-surface-default, #fff)",
                borderColor: "000",
                borderRadius: "var(--ds-border-radius-md)",
                borderWidth: "var(--ds-border-width-default)",
                borderStyle: "solid",
            }}
        >
            <Stack gap="sm">
                <Box>
                    <Title
                        order={5}
                        style={{
                            color: "var(--Components-Text-Default, #1C2530)",
                            fontFamily: "var(--ds-font-family)",
                            fontSize: rem(14),
                            fontWeight: 500,
                            lineHeight: "130%",
                            letterSpacing: "0.08px",
                            textDecorationLine: "underline",
                            marginBottom: rem(0), // ➖ fjernet ekstra spacing
                        }}
                    >
                        {gateName}
                    </Title>

                    <Text
                        style={{
                            color: "#5C6C7F",
                            fontFamily: "Roboto",
                            fontSize: rem(12),
                            fontWeight: 400,
                            lineHeight: "130%",
                            marginTop: rem(0), // ➖ tett opp mot Title
                        }}
                    >
                        {statusLabel}
                    </Text>
                </Box>

                <Box
                    style={{
                        height: "100%",
                        borderRadius: rem(6),
                        border: `1px solid ${borderColor}`,
                        overflow: "hidden",
                    }}
                >
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
                </Box>
            </Stack>

        </Card>
    );
};

function getFillColor(percent: number): string {
    if (percent > 86) return "#F45F63";
    if (percent > 57) return "#ECC56B";
    return "#8FC997";
}

function getBorderColor(percent: number): string {
    if (percent > 86) return "#E4575A";
    if (percent > 57) return "#E7B43F";
    return "#8FC997";
}

function getBackgroundColor(percent: number): string {
    if (percent > 86) return "#FDE2E3";
    if (percent > 57) return "#FAE6C6";
    return "#DAEDDD";
}
