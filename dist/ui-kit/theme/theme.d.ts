import { Colors } from '../colors';
export declare enum ThemeName {
    RED_THEME = "RED_THEME",
    BLUE_THEME = "BLUE_THEME"
}
export interface UiKitTheme {
    primary: Colors;
    secondary: Colors;
    surface: Colors;
}
export declare const uiKitTheme: Record<ThemeName, UiKitTheme>;
