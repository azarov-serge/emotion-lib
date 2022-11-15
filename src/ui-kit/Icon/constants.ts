import { IconNameEnum } from './types';

import ApproveTick from '@/assets/icons/flat/ApproveTick.svg';
import CloseFill from '@/assets/icons/flat/Close Fill.svg';
import Close from '@/assets/icons/flat/Close.svg';
import Minus from '@/assets/icons/flat/Minus.svg';
import Plus from '@/assets/icons/flat/Plus.svg';
import Research from '@/assets/icons/flat/Research.svg';
import RightArrow from '@/assets/icons/flat/right arrow.svg';
import Spinner from '@/assets/icons/flat/Spinner.svg';
import Warning from '@/assets/icons/flat/Warning.svg';
import Star from '@/assets/icons/flat/Star.svg';

import CheckGreen from '@/assets/icons/colored/CheckGreen.svg';
import CloseRed from '@/assets/icons/colored/CloseRed.svg';
import WarningYellow from '@/assets/icons/colored/WarningYellow.svg';

import Sushi from '@/assets/icons/emoji/Sushi.png';
import Pizza from '@/assets/icons/emoji/Pizza.png';
import HotBeverage from '@/assets/icons/emoji/HotBeverage.png';
import Hamburger from '@/assets/icons/emoji/Hamburger.png';
import GreenApple from '@/assets/icons/emoji/GreenApple.png';
import FrenchFries from '@/assets/icons/emoji/FrenchFries.png';

export const iconsMap = {
  flat: {
    [IconNameEnum.approveTick]: ApproveTick,
    [IconNameEnum.closeFill]: CloseFill,
    [IconNameEnum.close]: Close,
    [IconNameEnum.minus]: Minus,
    [IconNameEnum.plus]: Plus,
    [IconNameEnum.research]: Research,
    [IconNameEnum.rightArrow]: RightArrow,
    [IconNameEnum.spinner]: Spinner,
    [IconNameEnum.warning]: Warning,
    [IconNameEnum.star]: Star,
  },

  colored: {
    [IconNameEnum.checkGreen]: CheckGreen,
    [IconNameEnum.closeRed]: CloseRed,
    [IconNameEnum.warningYellow]: WarningYellow,
  },

  emoji: {
    [IconNameEnum.sushi]: Sushi,
    [IconNameEnum.pizza]: Pizza,
    [IconNameEnum.hotBeverage]: HotBeverage,
    [IconNameEnum.hamburger]: Hamburger,
    [IconNameEnum.greenApple]: GreenApple,
    [IconNameEnum.frenchFries]: FrenchFries,
  },
};
