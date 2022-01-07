import React from "react";
import { buildClassName } from "../../services/buildClassName";
import { IsTheme } from "./themePropTypes";

const propTypes = {
    /**
     * The theme name that we want to use it order to override the default theme.
     */
    themeName: IsTheme,
};

const defaultProps = {
    themeName: '',
};

const Theme = ({ themeName, children }) => (
    <div className={buildClassName([themeName])}>
        {children}
    </div>
);


Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
