import React from "react";
import "../BackButton/backButton.css";
import { router } from '../../app/router';

export const BackButton: React.FC = () => {
  const handleBack = () => {
    console.log("window.history.length", window.history.length);

    if (window.history.length > 1) {
      router.history.go(-1);
    } else {
      router.navigate({ to: '/' }); // fallback til forsiden
    }
  };

  return (
    <button className="back-button" onClick={handleBack}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path
          d="M14.6371 6.90304C14.8843 6.65588 15.2854 6.65583 15.5326 6.90304C15.7796 7.15028 15.7797 7.55138 15.5326 7.79855L10.7142 12.6159L15.5531 17.4548C15.8003 17.702 15.8003 18.1031 15.5531 18.3503C15.3059 18.5976 14.9049 18.5976 14.6576 18.3503L9.37147 13.0642C9.12422 12.8169 9.12423 12.4159 9.37147 12.1687L14.6371 6.90304Z"
          fill="#A42784"
        />
      </svg>
      <span>Tilbake</span>
    </button>
  );
};
