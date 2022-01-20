import { css } from "styled-components";

/* Media queries */
export const screenWidth = {
  mobile: "576px",
  tablet: "768px" /* sm */,
  laptop: "992px" /* md */,
  desktop: "1224px" /* lg */,
};

// NOTE: Nico confirmed we can update desktop breakpoint to 1200px, so it matches Bootstrap breakpoints

/* For mobile-first design */
export const breakpoint = Object.keys(screenWidth).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media screen and (min-width: ${screenWidth[key]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
