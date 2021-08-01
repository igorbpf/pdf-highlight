import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      primaryVariant: string;

      secondary: string;
      secondaryVariant: string;

      background: string;
      surface: string;
      error: string;

      onPrimary: string;
      onSecondary: string;
      onBackground: string;
      onSurface: string;
      onError: string;

      dataPositive: string;
      dataNegative: string;
    };
  }
}
