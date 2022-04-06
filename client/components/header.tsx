import Head from "next/head"
import React from "react"

export const CustomHeader = () => {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </head>
      <header>
        <title>STND: ESS System</title>
      </header>
    </html>
  )
}
