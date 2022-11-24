import { css } from '@emotion/react';

import HalvarBreitschriftThin from '../../../assets/fonts/Halvar/HalvarBreitschriftThin.ttf';
import HalvarBreitschriftRegular from '../../../assets/fonts/Halvar/HalvarBreitschriftRegular.ttf';
import HalvarBreitschriftBold from '../../../assets/fonts/Halvar/HalvarBreitschriftBold.ttf';
import HalvarMittelschriftRegular from '../../../assets/fonts/Halvar/HalvarMittelschriftRegular.ttf';
import HalvarMittelschriftBold from '../../../assets/fonts/Halvar/HalvarMittelschriftBold.ttf';

// export const global = css`
//   /* FONTS */

//   @font-face {
//     font-family: 'Halvar Breitschrift';
//     src: url('${HalvarBreitschriftThin}') format('truetype');
//     font-weight: 300;
//   }

//   @font-face {
//     font-family: 'Halvar Breitschrift';
//     src: url('${HalvarBreitschriftRegular}') format('truetype');
//     font-weight: 400;
//   }

//   @font-face {
//     font-family: 'Halvar Breitschrift';
//     src: url('${HalvarBreitschriftBold}') format('truetype');
//     font-weight: 700;
//   }

//   @font-face {
//     font-family: 'Halvar Mittelschrift';
//     src: url('${HalvarMittelschriftRegular}')
//       format('truetype');
//     font-weight: 400;
//   }

//   @font-face {
//     font-family: 'Halvar Mittelschrift';
//     src: url('${HalvarMittelschriftBold}') format('truetype');
//     font-weight: 700;
//   }

//   html,
//   body {
//     margin: 0;
//     padding: 0;
//     min-width: 320px;
//     font-family: 'Halvar Mittelschrift', Helvetica, sans-serif;
//     font-weight: 500;
//     font-size: 16px;
//     line-height: 28px;
//   }

//   a {
//     text-decoration: none;

//     color: inherit;
//   }

//   * {
//     font-family: 'Halvar Mittelschrift', Helvetica, sans-serif;
//     box-sizing: border-box;
//   }
// `;

export const global = css`
  /* FONTS */

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('./node_modules/emotion-lib/fonts/Halvar/HalvarBreitschriftThin.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('./node_modules/emotion-lib/fonts/Halvar/HalvarBreitschriftRegular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('./node_modules/emotion-lib/fonts/Halvar/HalvarBreitschriftBold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Halvar Mittelschrift';
    src: url('./node_modules/emotion-lib/fonts/Halvar/HalvarMittelschriftRegular.ttf')
      format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Halvar Mittelschrift';
    src: url('./node_modules/emotion-lib/fonts/Halvar/HalvarMittelschriftBold.ttf') format('truetype');
    font-weight: 700;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: 'Halvar Mittelschrift', Helvetica, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }

  a {
    text-decoration: none;

    color: inherit;
  }

  * {
    font-family: 'Halvar Mittelschrift', Helvetica, sans-serif;
    box-sizing: border-box;
  }
`;
