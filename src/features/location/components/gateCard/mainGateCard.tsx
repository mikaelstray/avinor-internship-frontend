import React from "react";
import { Box, Card, Group, Stack, Text, Title, Progress, rem } from "@mantine/core";
import { IoPerson } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { FaUsers } from "react-icons/fa";


interface GateCardProps {
  gateName: string;
  availabilityLevel: number;
}

export const MainGateCard = ({
  gateName,
  availabilityLevel,
}: GateCardProps) => {
  const headline = getAvailabilityHeadline(availabilityLevel);
  const description = getAvailabilityText(availabilityLevel);
  const fillColor = getFillColor(availabilityLevel);
  const backgroundColor = getBackgroundColor(availabilityLevel);
  const borderColor = getBorderColor(availabilityLevel);
  const Icon = getIcon(availabilityLevel);

  return (
    <Card
      padding="lg"
      radius="lg"
      withBorder
      style={{
        width: rem(600),
        height: rem(300),
        background: "var(--ds-color-surface-default, #fff)",
        border: "var(--ds-border-width-default, 1px) solid var(--ds-color-border-subtle, #1C2530)",
        borderRadius: "var(--ds-border-radius-lg, 12px)",
      }}
    >

      <Stack gap="md" style={{ height: "100%" }}>
        <Group justify="space-between">
          <div>
            <Title
              order={3}
              style={{
                fontFamily: "Avinor, sans-serif",
                fontWeight: 500,
                fontSize: rem(24),
                lineHeight: "130%",
                letterSpacing: "-0.075px",
              }}
            >
              {headline}
            </Title>
            <Text size="sm" c="dimmed" mt="xs">
              Estimert ledige sitteplasser
            </Text>
          </div>
          <Icon size={28} color="#1C2530" />
        </Group>

        {/* Progress container */}
        <Box
          style={{
            border: `1px solid ${borderColor}`,
            borderRadius: rem(8),
            height: rem(33),
            overflow: "hidden",
          }}
        >
          <Progress
            value={availabilityLevel}
            size="xl"
            radius={8}
            color={fillColor}
            style={{ height: rem(33) }}
            styles={{
              root: {
                backgroundColor: backgroundColor,
              },
              bar: {
                transition: "none",
              },
            }}
          />
        </Box>

        <Text
          style={{
            color: "#1F2C3D",
            fontSize: rem(18),
            lineHeight: "150%",
            letterSpacing: "0.09px",
          }}
        >
          {description}
        </Text>
      </Stack>
    </Card>
  );
};


function getFillColor(percent: number): string {
  if (percent > 90) return "#F45F63";
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


function getAvailabilityHeadline(percent: number): string {
  if (percent > 100) return "Ingen ledig sitteplasser";
  if (percent > 86) return "Lite ledig sitteplass";
  if (percent > 57) return "Noe ledig sitteplass";
  return "Mye ledig sitteplass";
}

function getAvailabilityText(percent: number): string {
  if (percent > 100)
    return "Det er høy pågang akkurat nå, og ingen ledige setet for øyeblikket. Se tilbud i nærheten om du ønsker sitteplass i nærhet til din gate.";
  if (percent > 86)
    return "Det er høy pågang akkurat nå, og det kan være vanskelig å finne sitteplass.";
  if (percent > 57)
    return "Det er en del pågang i området, men fortsatt tilgjengelige sitteplasser.";
  return "Det er for tiden lav pågang og gode muligheter for å finne ledig sitteplass i dette området.";
}


function getIcon(percent: number) {
  if (percent > 86) return FaUsers;
  if (percent > 57) return BsFillPeopleFill;
  return IoPerson;
}
