import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";
import logo from "assets/img/illustrations/falcon.png";
import Image from "next/image";

const Logo = ({ at, width, className, textClass, height, ...rest }): any => {
  return (
    <Link href="/">
      <a
        {...rest}
        className={classNames(
          "text-decoration-none",
          { "navbar-brand text-left": at === "navbar-vertical" },
          { "navbar-brand text-left": at === "navbar-top" }
        )}
      >
        <div
          className={classNames(
            "d-flex",
            {
              "align-items-center py-3": at === "navbar-vertical",
              "align-items-center": at === "navbar-top",
              "flex-center fw-bolder fs-5 mb-4": at === "auth",
            },
            className
          )}
        >
          <Image
            className="me-2"
            src={logo}
            alt="Logo"
            width={width}
            height={height}
          />
          <span className={classNames("font-sans-serif", textClass)}>
            falcon
          </span>
        </div>
      </a>
    </Link>
  );
};

Logo.propTypes = {
  at: PropTypes.oneOf(["navbar-vertical", "navbar-top", "auth"]),
  width: PropTypes.number,
  className: PropTypes.string,
  textClass: PropTypes.string,
};

Logo.defaultProps = { at: "auth", width: 58 };

export default Logo;
