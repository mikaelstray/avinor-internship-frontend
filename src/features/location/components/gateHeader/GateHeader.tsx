import React from "react";
import "./GateHeader.css";

interface GateHeaderProps {
  gateName: string;
}

export const GateHeader: React.FC<GateHeaderProps> = ({ gateName }) => {
  return (
    <div className="gate-header-wrapper">
      <h2 className="gate-header-title">{gateName}</h2>
    </div>
  );
};
