import Main from "Main";
import React from "react";
import { CustomHeader } from "./header";
import NavbarVertical from "./navbar/vertical/NavbarVertical";

export const CustomLayout = (props: any) => {
  return (
    <>
      <CustomHeader />
      <Main>
        <div className="container-fluid">
          <NavbarVertical />
        </div>
      </Main>
    </>
  );
};
