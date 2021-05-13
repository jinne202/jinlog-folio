import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mode : {
      PrimaryColor: string;
      SecondaryColor: string;
      PointColor : string;
      PointColorSecond : string;
      PointColorDark : string;
      TextColor : string;
    }
  }
}