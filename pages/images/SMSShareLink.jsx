import React from "react";

const SvgSMSShareLink = (props) => {
  const color = props?.isSelected ? "#000000" : "#8C8C8C";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4V20H22V4H2ZM0 19.5L0.012 4.5C0.012 3.125 1.08 2 2.4 2H21.6C22.92 2 24 3.125 24 4.5V19.5C24 20.875 22.92 22 21.6 22H2.4C1.08 22 0 20.875 0 19.5Z"
        fill={color}
      />
      <path
        d="M23 7.57143L12 14L1 7.57143V5L12 11.4286L23 5V7.57143Z"
        fill={color}
      />
    </svg>
  );
};

export default SvgSMSShareLink;
