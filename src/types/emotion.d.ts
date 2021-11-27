import "@emotion/react";
import { Property } from "csstype";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      backgroundColor: Property.BackgroundColor;
      textColor: Property.Color;
    };
  }
}
