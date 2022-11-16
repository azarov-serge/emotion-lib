import { Colors } from '../colors';

export enum ThemeName {
	RED_THEME = 'RED_THEME',
	BLUE_THEME = 'BLUE_THEME',
}

export interface UiKitTheme {
	primary: Colors;
	secondary: Colors;
	surface: Colors;
}

const redTheme = {
	primary: Colors.RED,
	secondary: Colors.BLACK,
	surface: Colors.GREY,
};

const blueTheme = {
	primary: Colors.BLUE,
	secondary: Colors.DIMGRAY,
	surface: Colors.AZURE,
};

export const uiKitTheme: Record<ThemeName, UiKitTheme> = {
    [ThemeName.RED_THEME]: redTheme,
    [ThemeName.BLUE_THEME]:blueTheme,
};
