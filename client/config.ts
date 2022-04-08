import { UnknownFunction } from "reselect/es/types";

export const version = "3.4.0";
export const navbarBreakPoint = "xl"; // Vertical navbar breakpoint
export const topNavbarBreakpoint = "lg";
export const settings = {
  isFluid: false,
  isRTL: false,
  isDark: false,
  navbarPosition: "vertical",
  showBurgerMenu: false, // controls showing vertical nav on mobile
  currency: "$",
  isNavbarVerticalCollapsed: false, // toggle vertical navbar collapse
  navbarStyle: "transparent",
};

export type test = {
  config: settingType;
  setConfig: UnknownFunction;
  configDispatch: UnknownFunction;
};

export type settingType = {
  isFluid: boolean;
  isRTL: boolean;
  isDark: boolean;
  navbarPosition: string;
  showBurgerMenu: boolean; // controls showing vertical nav on mobile
  currency: string;
  isNavbarVerticalCollapsed: boolean; // toggle vertical navbar collapse
  navbarStyle: string;
};

export default { version, navbarBreakPoint, topNavbarBreakpoint, settings };
