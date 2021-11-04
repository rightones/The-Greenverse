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
        font-family: 'Spoqa Han Sans Neo', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
        background: #f7f9fa;
    }
    
    ::selection { background-color: ${themes.color.blue}; color: white;}
    
    h1 {
        font-family: Documan;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${themes.color.blue};
        margin: 0 0 16px 0;
        text-transform: uppercase;
    }
    
    p {
        font-size: 14px;
        color: ${themes.color.text};
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin: 16px 0;
    }
    
    img{
        margin: 24px 0;
    }
`;

export default GlobalStyles;
