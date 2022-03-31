import React from "react"
import { CustomFooter } from "./footer"
import { CustomHeader } from "./header"

export const CustomLayout = (props: any) => {
  return (
    <>
      <CustomHeader />
      <CustomFooter />
    </>
  )
}
