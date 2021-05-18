import type { AppProps /*, AppContext */ } from 'next/app.js';
import React, { useEffect } from 'react';
import Head from 'next/head';
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
            <Head>
				<title>jin.log</title>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://jin-log.today"/>
                <meta property="og:title" content="jin.log"/>
                <meta property="og:description" content="Junoir Front-end Developer Han eunjin Portfolio"/>
                <meta property="og:image" content="../static/image/thumbnail.png" />
                <meta property="og:image:width" content="600"/>
                <meta property="og:image:height" content="400"/>
			</Head>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default wrapper.withRedux(MyApp);