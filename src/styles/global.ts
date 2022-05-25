import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { device } from './device';

export default createGlobalStyle`

  @font-face {
    font-family: 'Grifter', serif;
    src: url("./fonts/Grifter/grifterbold.otf") format("opentype"),
    url("./fonts/Grifter/grifterbold-webfont.woff") format("woff"),
    url("./fonts/Grifter/grifterbold.ttf") format("truetype");
  }

  @font-face {
    font-family: 'Poppins', sans-serif;
    src: url("./fonts/Poppins/Poppins-Black.ttf") format("truetype"),
    url("./fonts/Poppins/Poppins-Bold.ttf") format("truetype"),
    url("./fonts/Poppins/Poppins-ExtraBold.ttf") format("truetype"),
    url("./fonts/Poppins/Poppins-ExtraLight.ttf") format("truetype"),
    url("./fonts/Poppins/Poppins-Light.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    height: 100vh;
    overflow-x: hidden;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }

  .scrollbar-thumb {
    background-color: #fff!important;
    width: 6px!important;
    border-radius: 0!important;
  }

  .scrollbar-track-y {
    background-color: transparent!important;
    width: 6px!important;
  }
  
  

`;

export const ContainerSize = styled.div`
  width: calc(100% - 120px);
  margin: auto;

  @media ${device.laptop} {
  width: calc(100% - 80px);
  }

  @media ${device.tablet} {
  width: calc(100% - 64px);
  }

  @media ${device.mobileL} {
  width: calc(100% - 40px);
  }
`;
