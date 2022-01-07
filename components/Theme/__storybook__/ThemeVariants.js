import { VariantsComponent } from "../../../storybookServices/renderVariants";
import { THEMES } from "../constants";

export const ThemeVariants = ({ children }) => (
    <VariantsComponent variants={Object.values(THEMES)}>
        {children}
    </VariantsComponent>
)