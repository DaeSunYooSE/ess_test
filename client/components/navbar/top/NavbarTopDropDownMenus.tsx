import React, { useContext } from "react";
import NavbarDropdown from "./NavbarDropdown";
import {
  dashboardRoutes,
  appRoutes,
  pagesRoutes,
} from "components/routes/routes";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import NavbarDropdownApp from "./NavbarDropdownApp";
import NavbarDropdownPages from "./NavbarDropdownPages";
import AppContext from "components/context/Context";

const NavbarTopDropDownMenus = () => {
  const {
    config: { navbarCollapsed, showBurgerMenu },
    setConfig,
  } = useContext(AppContext);

  const handleDropdownItemClick = () => {
    if (navbarCollapsed) {
      setConfig("navbarCollapsed", !navbarCollapsed);
    }
    if (showBurgerMenu) {
      setConfig("showBurgerMenu", !showBurgerMenu);
    }
  };
  return (
    <>
      <NavbarDropdown title="dashboard">
        {dashboardRoutes.children[0].children.map((route) => (
          <Dropdown.Item
            key={route.name}
            as={Link}
            className={route.active ? "link-600" : "text-500"}
            href={route?.to}
            onClick={handleDropdownItemClick}
          >
            {route.name}
          </Dropdown.Item>
        ))}
      </NavbarDropdown>

      <NavbarDropdown title="app">
        <NavbarDropdownApp items={appRoutes.children} />
      </NavbarDropdown>

      <NavbarDropdown title="pages">
        <NavbarDropdownPages items={pagesRoutes.children} />
      </NavbarDropdown>
    </>
  );
};

export default NavbarTopDropDownMenus;
