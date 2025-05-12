import React from "react";

interface OdooLogoProps {
  className?: string;
}

const OdooLogo: React.FC<OdooLogoProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      {/* Odoo logo - simplified version with 3 circles */}
      <circle cx="6" cy="12" r="3" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="18" cy="12" r="3" />
      <path d="M6 15v2a1 1 0 001 1h10a1 1 0 001-1v-2" />
      <path d="M6 9V7a1 1 0 011-1h10a1 1 0 011 1v2" />
    </svg>
  );
};

export default OdooLogo;
