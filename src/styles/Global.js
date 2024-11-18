import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    // 프리텐다드 폰트 불러오기
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

    ${reset}
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
        margin: 0;
    }
    /* html, body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #root {
        width: 1440px;
        height: 1280px;
        box-sizing: border-box;
    } */
    html, body {
        width: 100%;
        min-height: 100%;

        margin: 0;
        padding: 0;

        display: flex;
        overflow-y: auto;
    }

    #root {
        width: 100%;
        height: 100%;
        min-height: 1280px;
        box-sizing: border-box;
        justify-content: center;
    }
    div, span, h1, h2, h3, h4, h5, h6, p, a, dl, dt, dd, ol, ul, li, form, label, table {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body {
        line-height: 1;
        font-family: 'Pretendard', sans-serif;
        background-color: #fff;
    }
    ol, ul {
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
`;

export default GlobalStyle;