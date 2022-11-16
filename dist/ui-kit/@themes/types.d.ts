import { SerializedStyles } from '@emotion/react';
export interface TitleStyle {
    h1: SerializedStyles;
    h2: SerializedStyles;
    h3: SerializedStyles;
    h4: SerializedStyles;
}
export interface UiKitTheme {
    global: SerializedStyles;
    title: TitleStyle;
}
