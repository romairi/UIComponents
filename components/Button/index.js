import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { buildClassName } from "../../services/buildClassName";
import {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
  DEFAULT_SIZE,
  DEFAULT_VARIANT,
} from "./constants";

import "./index.scss";

const propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  /**
   * The size of the button (small, medium, large).
   */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),

  /**
   * Button contents.
   */
  children: PropTypes.string.isRequired,

  /**
   * Optional click handler.
   */
  onClick: PropTypes.func,

  /**
   * The type of the button (button, reset, submit).
   */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),

  /**
   * ClassName to extend the component.
   */
  className: PropTypes.string,

  /**
   * The variant to use button (contained, text, outlined).
   */
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
};

const defaultProps = {
  primary: true,
  size: DEFAULT_SIZE,
  type: BUTTON_TYPES.BUTTON,
  variant: DEFAULT_VARIANT,
  onClick: _.noop,
};

const Button = ({
  type,
  className,
  primary,
  size,
  variant,
  onClick,
  children,
}) => {
  const mode = primary ? "" : "secondary";

  return (
    <button
      type={type}
      className={buildClassName([
        "r-button",
        className,
        mode,
        size !== DEFAULT_SIZE && size,
        variant !== DEFAULT_VARIANT && variant,
      ])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
