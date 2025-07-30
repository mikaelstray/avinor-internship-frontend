import React from "react";
import { Box, Card, Stack, Text, Title, Progress, rem } from "@mantine/core";

interface GateCardProps {
  gateName: string;
  availabilityLevel: number; // 0–100
}

export const NearbyGateCard = ({
  gateName,
  availabilityLevel,
}: GateCardProps) => {
  const fillColor = getFillColor(availabilityLevel);
  const borderColor = getBorderColor(availabilityLevel);
  const backgroundColor = getBackgroundColor(availabilityLevel);
  const availability = getAvailabilityText(availabilityLevel);

  return (
    <Card
      shadow="md"
      padding="md"
      radius="lg"
      withBorder
      style={{
        width: rem(200),
        background: "var(--ds-color-surface-default, #fff)",
        borderColor: "var(--ds-color-border-subtle, #B8BCC1)",
        borderRadius: "var(--ds-border-radius-lg)",
        borderWidth: "var(--ds-border-width-default)",
        borderStyle: "solid",
      }}
    >
      <Stack gap="sm">
        <Title
          order={4}
          style={{
            color: "var(--Components-Text-Default, #1C2530)",
            fontFamily: "var(--ds-font-family)",
            fontSize: "var(--ds-font-size-6)",
            fontWeight: 400,
            letterSpacing: "0.12px",
            lineHeight: "150%",
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationSkipInk: "auto",
            textDecorationThickness: "auto",
            textUnderlineOffset: "auto",
            textUnderlinePosition: "from-font",
          }}
        >
          {gateName}
        </Title>

        <Text
          style={{
            color: "#5C6C7F",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          {availability}
        </Text>

        <Box
                  style={{
                    height: rem(32),
                    borderRadius: rem(8),
                    border: `1px solid ${borderColor}`,
                    overflow: "hidden",
                  }}
                >
                  <Progress
                    value={availabilityLevel}
                    size="xl"
                    radius={8}
                    color={fillColor}
                    style={{ height: rem(32) }}
                    styles={{
                      root: {
                        backgroundColor: backgroundColor,
                      },
                      bar: {
                        borderRadius: rem(8),
                        transition: "none", // Fjern overgang/anim
                      },
                    }}
                  />
                </Box>
      </Stack>
    </Card>
  );
};


function getFillColor(percent: number): string {
  if (percent > 70) return "#F45F63";
  if (percent > 40) return "#ECC56B";
  return "#8FC997";
}

function getBorderColor(percent: number): string {
  if (percent > 70) return "#E4575A";
  if (percent > 40) return "#E7B43F";
  return "#8FC997";
}

function getBackgroundColor(percent: number): string {
  if (percent > 70) return "#FDE2E3";
  if (percent > 40) return "#FAE6C6";
  return "#DAEDDD";
}

function getAvailabilityText(percent: number): string {
  if (percent > 70) return "Lite ledig";
  if (percent > 40) return "Noe ledig";
  return "Mye ledig";
}
