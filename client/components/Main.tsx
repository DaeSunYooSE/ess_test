import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import AppContext from "components/context/Context";
import { settings, settingType } from "config";
import { getColor, getItemFromStore } from "components/helpers/utils";
import { configReducer } from "../reducers/configReducer";
import useToggleStyle from "../hooks/useToggleStyle";
import { UnknownFunction } from "reselect/es/types";

const Main = (props: { children: any }) => {
  const configState = {
    isFluid: settings.isFluid,
    isRTL: settings.isRTL,
    isDark: settings.isDark,
    navbarPosition: settings.navbarPosition,
    isNavbarVerticalCollapsed: settings.isNavbarVerticalCollapsed,
    navbarStyle: settings.navbarStyle,
    currency: settings.currency,
    showBurgerMenu: settings.showBurgerMenu,
    showSettingPanel: false,
    navbarCollapsed: false,
  };

  const [config, configDispatch]: [settingType, UnknownFunction] = useReducer(
    configReducer,
    configState
  );

  const { isLoaded } = useToggleStyle(
    config.isRTL,
    config.isDark,
    configDispatch
  );

  const setConfig = (key: string, value: any) => {
    configDispatch({
      type: "SET_CONFIG",
      payload: {
        key: key,
        value: value,
        setInStore: [
          "isFluid",
          "isRTL",
          "isDark",
          "navbarPosition",
          "isNavbarVerticalCollapsed",
          "navbarStyle",
        ].includes(key),
      },
    });
  };

  return (
    <AppContext.Provider value={{ config, setConfig, configDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
