import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    backgroundSecondary: string,
    backgroundToggle: string,
    textOddRow: string,
  }
}
