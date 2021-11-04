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
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
                    />
                    <link
                        href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
                        rel="stylesheet"
                        type="text/css"
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
