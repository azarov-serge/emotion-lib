import { css } from '@emotion/react';

import SFPro from '../../../assets/fonts/SF-Pro/SF-Pro.ttf';
import SFProItalic from '../../../assets/fonts/SF-Pro/SF-Pro-Italic.ttf';

import SFProTextRegular from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-Regular.otf';
import SFProTextRegularItalic from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-RegularItalic.otf';
import SFProTextMedium from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-Medium.otf';
import SFProTextMediumItalic from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-MediumItalic.otf';
import SFProTextSemibold from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-Semibold.otf';
import SFProTextSemiboldItalic from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-SemiboldItalic.otf';
import SFProTextBold from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-Bold.otf';
import SFProTextBoldItalic from '../../../assets/fonts/SF-Pro-Text/SF-Pro-Text-BoldItalic.otf';

import SFProDisplayMedium from '../../../assets/fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf';
import SFProDisplayMediumItalic from '../../../assets/fonts/SF-Pro-Display/SF-Pro-Display-MediumItalic.otf';
import SFProDisplaySemibold from '../../../assets/fonts/SF-Pro-Display/SF-Pro-Display-Semibold.otf';
import SFProDisplaySemiboldItalic from '../../../assets//fonts/SF-Pro-Display/SF-Pro-Display-SemiboldItalic.otf';


export const global = css`
  /* SF Pro */
  @font-face {
    font-family: 'SF Pro';
    src: url('${SFPro}');
  }

  /* @font-face {
  font-family: 'SF Pro';
  src: url('${SFProItalic}');
  font-style: italic;
} */

  /* SF Pro Text */
  @font-face {
    font-family: 'SF Pro Text';
    src: url('${SFProTextRegular}');
    font-weight: 400;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('${SFProTextRegularItalic}');
  font-weight: 400;
  font-style: italic;
} */

  @font-face {
    font-family: 'SF Pro Text';
    src: url('${SFProTextMedium}');
    font-weight: 500;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('${SFProTextMediumItalic}');
  font-weight: 500;
  font-style: italic;
} */

  @font-face {
    font-family: 'SF Pro Text';
    src: url('${SFProTextSemibold}');
    font-weight: 600;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('${SFProTextSemiboldItalic}');
  font-weight: 600;
  font-style: italic;
} */

  @font-face {
    font-family: 'SF Pro Text';
    src: url('${SFProTextBold}');
    font-weight: 700;
  }

  /* @font-face {
  font-family: 'SF Pro Text';
  src: url('${SFProTextBoldItalic}');
  font-weight: 700;
  font-style: italic;
} */

  /* SF Pro Display */
  @font-face {
    font-family: 'SF Pro Display';
    src: url('${SFProDisplayMedium}');
    font-weight: 500;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('${SFProDisplayMediumItalic}');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('${SFProDisplaySemibold}');
    font-weight: 600;
  }

  @font-face {
    font-family: 'SF Pro Display';
    src: url('${SFProDisplaySemiboldItalic}');
    font-weight: 600;
    font-style: italic;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'SF Pro Text', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }

  a {
    text-decoration: none;

    color: inherit;
  }

  * {
    box-sizing: border-box;
    font-family: 'SF Pro Text', sans-serif;
  }
`;
