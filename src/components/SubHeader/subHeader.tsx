import React from "react";
import "../SubHeader/subHeader.css";
import {BackButton} from "../BackButton/BackButton.tsx";

type Props = {
  showBackButton: boolean;
};

export const SubHeader: React.FC<Props> = ({ showBackButton }) => {
  return (
    <div className="sub-header">
      {showBackButton ? <BackButton /> : <div />}

      <button className="language-button">
        <div className="flag-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M10 20.7274C15.5228 20.7274 20 16.2503 20 10.7274C20 5.20457 15.5228 0.727417 10 0.727417C4.47715 0.727417 0 5.20457 0 10.7274C0 16.2503 4.47715 20.7274 10 20.7274Z" fill="#F0F0F0" />
            <path d="M0.344727 13.336C0.92332 15.4828 2.19852 17.3435 3.91328 18.661V13.336H0.344727Z" fill="#D80027"/>
            <path d="M9.13086 20.6892C9.4175 20.7139 9.70738 20.7273 10.0004 20.7273C14.6207 20.7273 18.5084 17.5936 19.6559 13.336H9.13086V20.6892Z" fill="#D80027"/>
            <path d="M19.6559 8.11852C18.5084 3.86087 14.6207 0.727234 10.0004 0.727234C9.70738 0.727234 9.4175 0.740593 9.13086 0.765281V8.11852H19.6559Z" fill="#D80027"/>
            <path d="M3.91328 2.79349C2.19852 4.11107 0.92332 5.97173 0.344727 8.11857H3.91328V2.79349Z" fill="#D80027"/>
            <path d="M19.9154 9.42296H7.82613V0.964996C6.90195 1.16992 6.02582 1.50207 5.21738 1.9432V9.42289H0.0846484C0.0289844 9.84992 0 10.2852 0 10.7273C0 11.1694 0.0289844 11.6047 0.0846484 12.0316H5.21734V19.5114C6.02582 19.9525 6.90195 20.2847 7.82609 20.4896V12.0318H19.9154C19.9709 11.6047 20 11.1694 20 10.7273C20 10.2852 19.9709 9.84992 19.9154 9.42296Z" fill="#0052B4"/>
          </svg>
        </div>
        <span>Norsk</span>
      </button>
    </div>
  );
};
