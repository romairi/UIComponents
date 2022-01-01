import {
  SIZE_LARGE,
  SIZE_MEDIUM,
  SIZE_SMALL,
} from "../../constants/propTypes/sizes";
import {
  VARIANT_CONTAINED,
  VARIANT_TEXT,
  VARIANT_OUTLINED,
} from "../../constants/propTypes/variants";

export const BUTTON_SIZES = {
  LARGE: SIZE_LARGE,
  MEDIUM: SIZE_MEDIUM,
  SMALL: SIZE_SMALL,
};

export const BUTTON_TYPES = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

export const BUTTON_VARIANTS = {
  CONTAINED: VARIANT_CONTAINED,
  TEXT: VARIANT_TEXT,
  OUTLINED: VARIANT_OUTLINED,
};

export const DEFAULT_SIZE = SIZE_MEDIUM;
export const DEFAULT_VARIANT = VARIANT_CONTAINED;
