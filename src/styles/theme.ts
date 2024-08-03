import { DefaultTheme } from "styled-components";

const colors = {
  mainColor: "#FFB65A",
  white: "#fff",
  black: "#151515",
  gray: "#AAA",
  lightGray: "#F2F2F2",
};

export type ColorsTypes = typeof colors;
export const theme: DefaultTheme = {
  colors,
};