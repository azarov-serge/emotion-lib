import { type IconName } from './types';
import { iconsMap } from './constants';

type ImageFile = any;

export const getIconByName = (name: IconName): ImageFile => {
  switch (true) {
    case name in iconsMap.flat:
      // @ts-ignore
      return iconsMap.flat[name];

    case name in iconsMap.colored:
      // @ts-ignore
      return iconsMap.colored[name];

    case name in iconsMap.emoji:
      // @ts-ignore
      return iconsMap.emoji[name];
  }
};

export const getIsVectorImage = (name: IconName): boolean => {
  if (name in iconsMap.emoji) {
    return false;
  }

  return true;
};
