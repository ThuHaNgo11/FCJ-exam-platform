export const getCustomAmplifyTheme = () => ({
    name: 'button-theme',
    tokens: {
        components: {
            button: {
                // style the success variation
                primary: {
                    backgroundColor: {value: '{colors.green.60}'},
                    _hover: {
                        backgroundColor: {value: '{colors.green.80}'},
                    },
                    _focus: {
                        backgroundColor: {value: '{colors.green.80}'},
                    },
                    _active: {
                        backgroundColor: {value: '{colors.green.90}'},
                    },
                },
            },
        },
    },
})