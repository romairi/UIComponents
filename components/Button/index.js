import React from "react";
import PropTypes from "prop-types";
import { BUTTON_SIZES, BUTTON_TYPES, DEFAULT_SIZE } from "./constants";
import _ from 'lodash';
import { buildClassName } from '../../services/buildClassName';

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
};

const defaultProps = {
  primary: true,
  size: DEFAULT_SIZE,
  type: BUTTON_TYPES.BUTTON,
  onClick: _.noop,
};

const Button = ({ primary, type, size, className, onClick, children }) => {
  const mode = primary ? '' : 'secondary'
  return (
    <button
      type={type}
      className={buildClassName([
        "r-button",
        className,
        mode,
        size !== DEFAULT_SIZE && size,
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