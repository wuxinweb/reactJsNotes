import { createGlobalStyle } from 'styled-components';

export const GlobaStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,input,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.container{
	margin-left: auto;
	margin-right: auto;
	@media (min-width: 760px) {
		width: 100%;
	}
	@media (min-width: 788px) {
		width: 760px;
	}
	@media (min-width: 992px) {
		width: 960px;
	}
}

@font-face {
  font-family: 'iconfont';  /* project id 1037919 */
  src: url('//at.alicdn.com/t/font_1037919_5arzrv8u377.eot');
  src: url('//at.alicdn.com/t/font_1037919_5arzrv8u377.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1037919_5arzrv8u377.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1037919_5arzrv8u377.woff') format('woff'),
  url('//at.alicdn.com/t/font_1037919_5arzrv8u377.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1037919_5arzrv8u377.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:14px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
`;
