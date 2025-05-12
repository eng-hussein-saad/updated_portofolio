import React from "react";

interface RestApiLogoProps {
  className?: string;
}

const RestApiLogo: React.FC<RestApiLogoProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* API text in center */}
      <path d="M10 8l-2 8" />
      <path d="M14 8l2 8" />
      <path d="M8 12h8" />

      {/* Globe network representation */}
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
};

export default RestApiLogo;
