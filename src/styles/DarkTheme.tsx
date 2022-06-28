import { DefaultTheme } from "styled-components";
import { DARKBACKGROUND, PRIMARY, SECUNDARY } from "./colors";

export const DarkTheme: DefaultTheme = {
    colors: {
       background: DARKBACKGROUND,
       primary: PRIMARY,
       secondary: SECUNDARY
    },
    measures: {
        radius: 8
    }
};