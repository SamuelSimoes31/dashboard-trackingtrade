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
    nivoTheme:{
      background: string;
      textColor: string;
      fontSize: number;
      axis?: {
          domain: {
              line: {
                  stroke: string;
                  strokeWidth: number;
              };
          };
          ticks: {
              line: {
                  stroke: string;
                  strokeWidth: number;
              };
          };
      };
      grid?: {
          line: {
              stroke: string;
              strokeWidth: number;
          };
      };
    }
  }
}