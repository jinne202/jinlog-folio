export const layoutInitialState = {
    themeMode : "dark",
}

export const LIGHT_MODE = 'LIGHT_MODE';
export const DARK_MODE = 'DARK_MODE';

export const lightModeRequest = () => ({
    type : LIGHT_MODE
});

export const darkModeRequest = () => ({
    type : DARK_MODE
});

export const layoutReducer = (state = layoutInitialState, action:any) =>
{
    switch (action.type) {
        case LIGHT_MODE : {
            return {
                ...state,
                themeMode : "light",
            }
        }
        case DARK_MODE : {
            return {
                ...state,
                themeMode : "dark",
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}