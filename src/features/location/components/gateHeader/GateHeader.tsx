import React from "react";
import "./GateHeader.css";

interface GateHeaderProps {
  gateName: string;
}

export const GateHeader = ({ gateName }: GateHeaderProps) => {
  return (
    <div className="gate-header-wrapper">
      <h2 className="gate-header-title">Gate {gateName}</h2>
    </div>
  );
};
