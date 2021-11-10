/* eslint-disable react/no-danger */
// eslint-disable-next-line max-classes-per-file
import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet as StyledComponentServerStyleSheet } from "styled-components";

class HeadWithoutPreload extends Head {
    getPreloadDynamicChunks() {
        return [];
    }

    getPreloadMainLinks() {
        return [];
    }
}
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const styledSheet = new StyledComponentServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => styledSheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {styledSheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            styledSheet.seal();
        }
    }

    render() {
        return (
            <Html lang="ko">
                <HeadWithoutPreload>
                    <link rel="preload" href="/fonts/Documan-Medium.woff2" as="font" crossOrigin="" type="font/woff2" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                </HeadWithoutPreload>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
