import React from "react";

function AddIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <mask
        id="mask0_25_734"
        style={{ maskType: "alpha" }}
        width="20"
        height="20"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H20V20H0z"></path>
      </mask>
      <g mask="url(#mask0_25_734)">
        <path
          fill="#AF0000"
          d="M9.25 15v-4.25H5v-1.5h4.25V5h1.5v4.25H15v1.5h-4.25V15h-1.5z"
        ></path>
      </g>
    </svg>
  );
}

export default AddIcon;
