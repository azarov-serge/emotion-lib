import { SerializedStyles } from '@emotion/react';

// #region TitleStyle
export interface TitleStyle {
  h1: SerializedStyles;
  h2: SerializedStyles;
  h3: SerializedStyles;
  h4: SerializedStyles;
}
// #endregion
export interface UiKitTheme {
  global: SerializedStyles;
  // Ui-Kit
  title: TitleStyle;
}
