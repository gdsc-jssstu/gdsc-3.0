import React from "react";

const TeamIcon = (props) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 345" {...props}>
      <style>
        {
          "@keyframes team-line{0%{stroke-dashoffset:600}50%{stroke-dashoffset:0}}@keyframes team-line-layer0{0%,12%,67%{opacity:0}14%,65%{opacity:1}}@keyframes team-line-layer1{0%,18%,62%{opacity:0}20%,60%{opacity:1}}@keyframes team-line-layer2{0%,28%,52%{opacity:0}30%,50%{opacity:1}}"
        }
      </style>
      <g
        id="Group_17"
        data-name="Group 17"
        transform="translate(-73.416 -757.773)"
      >
        <g
          strokeDasharray={600}
          strokeDashoffset={600}
          data-name="Group 16"
          style={{
            animation: "team-line 5s ease .4s infinite",
          }}
          transform="translate(91.221 779.78)"
        >
          <path
            id="Path_49"
            fill="none"
            stroke="#404040"
            strokeLinecap="round"
            strokeWidth={7}
            d="M272.367 0v110.762H113.112v92.39H0v113.509"
            className="team-line"
            data-name="Path 49"
          />
          <path
            id="Path_50"
            fill="none"
            stroke="#404040"
            strokeLinecap="round"
            strokeWidth={7}
            d="M272.372 0v110.762h159.255v92.39h113.112v113.509"
            className="team-line"
            data-name="Path 50"
          />
          <path
            id="Path_51"
            fill="none"
            stroke="#404040"
            strokeLinecap="round"
            strokeWidth={7}
            d="M272.372 0v110.762h159.255v201.09"
            className="team-line"
            data-name="Path 51"
          />
          <path
            id="Path_52"
            fill="none"
            stroke="#404040"
            strokeLinecap="round"
            strokeWidth={7}
            d="M272.372 0v110.762h159.255v92.39H318.21v104.764"
            className="team-line"
            data-name="Path 52"
          />
          <path
            id="Path_53"
            fill="none"
            stroke="#404040"
            strokeLinecap="round"
            strokeWidth={7}
            d="M272.367 0v110.762H113.112v201.222"
            className="team-line"
            data-name="Path 53"
          />
        </g>
        <ellipse
          id="Ellipse_28"
          cx={21}
          cy={21.5}
          fill="#f15b44"
          data-name="Ellipse 28"
          rx={21}
          ry={21.5}
          transform="translate(342.416 757.773)"
        />
      </g>
    </svg>
  </>
);
export { TeamIcon };
