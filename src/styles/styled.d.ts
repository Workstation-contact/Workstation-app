import 'styled-components';``


declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
      transparent: string;
      svgcolor: string;
      card: string;
      border: string;
      border2: string;
      bgInnovant: string,
      hEffect: string,
      composition: string,
    }
  }
}