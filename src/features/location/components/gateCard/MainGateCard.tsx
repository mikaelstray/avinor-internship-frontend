import React from "react";
import "./mainGateCard.css";

interface GateCardProps {
  gateName: string;
  availabilityLevel: number;
}

export const MainGateCard = ({
  gateName,
  availabilityLevel,
}: GateCardProps) => {
  const clipId = `progress-clip-${gateName.replace(/\s+/g, "-")}`;
  const fillColor = getFillColor(availabilityLevel);
  const backgroundColor = getBackgroundColor(availabilityLevel);
  const borderColor = getBorderColor(availabilityLevel);
  const headline = getAvailabilityHeadline(availabilityLevel);
  const description = getAvailabilityText(availabilityLevel);

  return (
    <div className="main-gate-card">
      <div className="main-gate-card-header">
        <h3 className="main-gate-headline">{headline}</h3>
        <p className="main-gate-subtext">Estimert opptatte sitteplasser</p>
      </div>

      <div className="main-gate-progress">
        <svg width="136" height="33" viewBox="0 0 136 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id={clipId}>
              <rect x="0" y="0" width={(availabilityLevel / 100) * 136} height="33" />
            </clipPath>
          </defs>

          <path
            d="M8 0.726562H128C132.142 0.726562 135.5 4.08443 135.5 8.22656V24.2266C135.5 28.3687 132.142 31.7266 128 31.7266H8C3.85786 31.7266 0.5 28.3687 0.5 24.2266V8.22656C0.5 4.08443 3.85786 0.726562 8 0.726562Z"
            fill={backgroundColor}
            stroke={borderColor}
          />

          <g clipPath={`url(#${clipId})`}>
            <path
              d="M0 8.22656C0 3.80828 3.58172 0.226562 8 0.226562H128C132.418 0.226562 136 3.80828 136 8.22656V24.2266C136 28.6448 132.418 32.2266 128 32.2266H8C3.58172 32.2266 0 28.6448 0 24.2266V8.22656Z"
              fill={fillColor}
            />
          </g>
        </svg>
      </div>

      <p className="main-gate-description">{description}</p>
    </div>
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
  if (percent > 70)
    return "Det er høy pågang akkurat nå, og det kan være vanskelig å finne sitteplass";
  if (percent > 40)
    return "Det er en del pågang i området, men fortsatt tilgjengelige sitteplasser";
  return "Det er for tiden lav pågang og gode muligheter for å finne ledig sitteplass i dette området.";
}

function getAvailabilityHeadline(percent: number): string {
  if (percent > 70) return "Lite ledig sitteplass";
  if (percent > 40) return "Noe ledig sitteplass";
  return "Mye ledig sitteplass";
}
