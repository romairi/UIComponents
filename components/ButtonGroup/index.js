import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { buildClassName } from "../../services/buildClassName";
import Theme from "../Theme";

import "./index.scss";
import { IsTheme } from "../Theme/themePropTypes";
import Button from "../Button";
import { VARIANT_CONTAINED, VARIANT_OUTLINED } from "../../constants/propTypes/variants";

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

    /**
     * The theme of the button.
     */
    theme: IsTheme,
};

const defaultProps = {
    primary: true,
    size: DEFAULT_SIZE,
    type: BUTTON_TYPES.BUTTON,
    variant: DEFAULT_VARIANT,
    onChange: _.noop,
};

const ButtonGroup = ({
    names,
    className,
    onChange,
    theme,
    ...restProps
}) => {
    const [selectedId, setSelectedId] = React.useState(0);

    function handleClick(buttonIdx) {
        setSelectedId(buttonIdx);
        onChange(buttonIdx);
    }
    
    return (
        <Theme className={className} themeName={theme}>
            {names.map((name, buttonIdx) => (<Button {...restProps} onClick={() => handleClick(buttonIdx)} variant={selectedId === buttonIdx ? VARIANT_CONTAINED : VARIANT_OUTLINED}>
                {name}
            </Button>))}
        </Theme>
    );
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
