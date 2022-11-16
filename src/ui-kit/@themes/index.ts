import { theme as foodCityTheme } from './foodCity';
import { theme as NFTeaTheme } from './NFTea';
import { UiKitTheme } from './types';
export * from './types';

export enum ThemeName {
  foodCity = 'foodCity',
  NFTea = 'NFTea',
}

export const uiKitTheme: Record<ThemeName, UiKitTheme> = {
  [ThemeName.foodCity]: foodCityTheme,
  [ThemeName.NFTea]: NFTeaTheme,
};
