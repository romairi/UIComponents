import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { buildClassName } from "../../services/buildClassName";
import {
  DEFAULT_VARIANT,
  TEXT_FIELD_SIZES,
  TEXT_FIELD_VARIANTS,
  DEFAULT_SIZE,
  DEFAULT_TYPE,
} from "./constants";
import Theme from "../Theme";
import { IsTheme } from "../Theme/themePropTypes";

import "./index.scss";

const propTypes = {
  /**
   * The id of the input element.
   * Use this prop to make label and helperText accessible for screen readers.
   */
  id: PropTypes.bool,

  /**
   * The size of the text field (small, medium, large).
   */
  size: PropTypes.oneOf(Object.values(TEXT_FIELD_SIZES)),

  /**
   * Optional onChange handler.
   * The onChange event occurs when the value of an element has been changed.
   */
  onChange: PropTypes.func,

  /**
   * ClassName to extend the component.
   */
  className: PropTypes.string,

  /**
   * The variant to use text field (standard, filled, outlined).
   */
  variant: PropTypes.oneOf(Object.values(TEXT_FIELD_VARIANTS)),

  /**
   * The theme of the text field.
   */
  theme: IsTheme,

  /**
   * Type of the input element (text, button, checkbox, password, radio, range, search)
   */
  type: PropTypes.string,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * If true, the label is displayed as required and the input element is required.
   */
  required: PropTypes.bool,

  /**
   * AutoComplete helps users to fill forms faster, especially on mobile devices.
   *
   */
  autoComplete: PropTypes.string,

  /**
   * If true, the input element is focused during the first mount.
   */
  autoFocus: PropTypes.bool,

  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: PropTypes.any,

  /**
   * If true, the label is displayed in an error state
   */
  error: PropTypes.bool,

  /**
   * If true, the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
};

const defaultProps = {
  size: DEFAULT_SIZE,
  variant: DEFAULT_VARIANT,
  type: DEFAULT_TYPE,
  required: false,
  onChange: _.noop,
  autoFocus: false,
  autoComplete: false,
  error: false,
  fullWidth: false,
};

const TextField = ({
  id,
  className,
  theme,
  size,
  text,
  type,
  placeholder,
  variant,
  onChange,
  required,
  autoFocus,
  autoComplete,
  fullWidth,
  error,
}) => {
  return (
    <Theme themeName={theme}>
      <input
        id={id}
        className={buildClassName(["r-text-field", className, size])}
        type={type}
        text={text}
        placeholder={placeholder}
        size={size}
        variant={variant !== DEFAULT_VARIANT && variant}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        fullWidth={fullWidth}
        error={error}
      />
    </Theme>
  );
};

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
