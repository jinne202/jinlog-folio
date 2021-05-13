import type { AppProps /*, AppContext */ } from 'next/app.js';
import React, { useEffect } from 'react';
import GlobalStyles from '../styles/global-styles';
import wrapper from '../store/configureStore';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { light, dark } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {

    const { themeMode } = useSelector((state: any) => state.layoutReducer);

    const theme = themeMode === 'light' ? { mode: light } : { mode: dark };

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default wrapper.withRedux(MyApp);