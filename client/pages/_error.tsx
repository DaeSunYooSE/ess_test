import React from "react";
import WidgetSectionTitle from "components/widgets/WidgetSectionTitle";
import { Row } from "react-bootstrap";
import { NextPageContext } from "next";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import Error404 from "components/errors/Error404";
import Error500 from "components/errors/Error500";

interface ErrorComponentProps {
  statusCode?: number;
}

const ErrorComponent = ({ statusCode }: ErrorComponentProps) => {
  return (
    <>
      <WidgetSectionTitle
        icon={faCircleExclamation}
        title="Errors"
        subtitle="ERROR Page"
        transform="shrink-4"
        className="mb-4 mt-6"
      />
      {statusCode == 404 ? <Error404 /> : <Error500 />}
    </>
  );
};

ErrorComponent.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorComponent;
