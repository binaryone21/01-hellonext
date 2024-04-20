import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  /** reset.css */
  ${reset}

  :root {
	--container-width: 1440px;
	--content-width: 1280px;
	--color-black: #000000;
	--color-white: #ffffff;
	--color-gray: #999999;
	--color-blue: #283E8F;
	/* 구글 웹 폰트에서 설정한 글꼴 이름 */
	--font-sans: 'Noto Sans KR';
  }

  // 모든 태그에 기본 글꼴로 지정함
  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, menu, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video, input, textarea, select, button {
	font-family: var(--font-sans);
  }

  a {
	text-decoration: none;
	color: var(--color-black);
  }

  * {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  }

  body {
	padding: 20px;
  }
`;

export default GlobalStyle;