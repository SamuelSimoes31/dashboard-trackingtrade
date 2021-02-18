import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
        primary: string;

        background: string;
        card_background: string;
        select_background: string;

        text_primary: string;
        text_secundary: string;
        text_legend: string;
    };
  }
}