import PropTypes from "prop-types";
import { THEMES } from "./constants";

export const IsTheme = PropTypes.oneOf(Object.values(THEMES).concat(['']));