import React from "react";
import PropTypes from "prop-types";
import { buildClassName } from "../../services/buildClassName";
import { IsTheme } from "./themePropTypes";

const propTypes = {
  /**
   * The theme name that we want to use it order to override the default theme.
   */
  themeName: IsTheme,

  /**
   * The class name of the wrapping div
   */
  className: PropTypes.string,
};

const defaultProps = {
  themeName: "",
};

const Theme = ({ className, themeName, children }) =>
  themeName || className ? (
    <div className={buildClassName([className, themeName])}>{children}</div>
  ) : (
    <>{children}</>
  );

Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
