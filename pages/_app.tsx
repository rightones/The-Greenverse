import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import themes from "../commons/themes";
import GlobalStyles from "../commons/GlobalStyles";

const Container = styled.main`
    background: ${themes.color.background};
    margin: 0 auto;
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={themes}>
                <GlobalStyles />
                <Container>
                    <Head>
                        <title>Illogical Love</title>
                        <meta name="theme-color" content="#1c00ff" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </RecoilRoot>
    );
};

export default MyApp;
