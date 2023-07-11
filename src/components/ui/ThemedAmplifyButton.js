import {getCustomAmplifyTheme} from "../../hooks/theme";
import {Button, ThemeProvider} from "@aws-amplify/ui-react";

const theme = getCustomAmplifyTheme()

const ThemedAmplifyButton = ({colorMode, children, ...props}) => {
    return (
        <ThemeProvider theme={theme} colorMode={colorMode}>
            <Button {...props}>{children}</Button>
        </ThemeProvider>
    )
}

export default ThemedAmplifyButton;