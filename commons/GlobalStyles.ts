import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import themes from "./themes";

const GlobalStyles = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Documan';
        src: url('/fonts/Documan-Medium.woff2') format('woff2'),
        url('/fonts/Documan-Medium.woff') format('woff');
        font-display: swap;
    }

    body {
        font-family: "Gothic A1", -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        background: #f7f9fa;
    }


    ::selection {
        background-color: ${themes.color.blue};
        color: white;
    }
    
    button, .button {
        font-family: "Documan", "IBM Plex Sans KR",  -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 12px;
        letter-spacing: normal;
        border: none;
    }

    h1 {
        display: block;
        font-family: "Documan", "IBM Plex Sans KR",  -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        letter-spacing: normal;
        margin: 0 0 16px 0;
        
        .subtitle{
            display: block;
            font-size: 12px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            color: #ff288f;
            text-transform: none;
            margin-bottom: 4px;
        }
        .title{
            display: block;
            font-size: 24px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            text-transform: uppercase;
            color: ${themes.color.blue};
        }
    }
    
    figure {
        
        margin: 24px 0;
        img, video {
            border-radius: 8px;
            width: 100%;
        }
        video {
            background-color: dimgray;
        }
        figcaption {
            margin-top:4px;
            font-family: "Documan", "IBM Plex Sans KR",  -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
            font-size: 12px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: center;
            color: rgba(0, 0, 0, 0.5);
            white-space: pre-wrap;
        }
    }
    
    blockquote {
        font-family: "Documan", "IBM Plex Sans KR",  -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        color: ${themes.color.blue};
        padding-left: 16px;
        border-left: 2px solid ${themes.color.blue};
    }

    p {
        font-size: 14px;
        color: ${themes.color.text};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        margin: 16px 0;
    }

    img {
        margin: 24px 0;
    }
    
    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin: 24px 0;
        &>*{
            margin: 0;
        }
    }
`;

export default GlobalStyles;
