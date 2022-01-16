import {
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
} from "../../constants/propTypes/sizes";

export const TEXT_FIELD_VARIANTS = {
  FILLED: "filled",
  STANDARD: "standard",
  OUTLINED: "outlined",
};

export const TEXT_FIELD_SIZES = {
  LARGE: SIZE_LARGE,
  MEDIUM: SIZE_MEDIUM,
  SMALL: SIZE_SMALL,
};

export const TEXT_FIELD_TYPES = {
  TEXT: "text",
  BUTTON: "button",
  CHECKBOX: "checkbox",
  PASSWORD: "password",
  RADIO: "radio",
  RANGE: "range",
  SEARCH: "search",
};

export const DEFAULT_SIZE = SIZE_MEDIUM;
export const DEFAULT_VARIANT = TEXT_FIELD_VARIANTS.OUTLINED;
export const DEFAULT_TYPE = TEXT_FIELD_TYPES.TEXT;
