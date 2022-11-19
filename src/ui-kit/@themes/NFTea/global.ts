import { css } from '@emotion/react';

// import HalvarBreitschriftThin from '../../../assets/fonts/Halvar/HalvarBreitschriftThin.ttf';
// import HalvarBreitschriftRegular from '../../../assets/fonts/Halvar/HalvarBreitschriftRegular.ttf';
// import HalvarBreitschriftBold from '../../../assets/fonts/Halvar/HalvarBreitschriftBold.ttf';
// import HalvarMittelschriftRegular from '../../../assets/fonts/Halvar/HalvarMittelschriftRegular.ttf';
// import HalvarMittelschriftBold from '../../../assets/fonts/Halvar/HalvarMittelschriftBold.ttf';

// @ts-ignore
import pckg from '../../../../package.json'
const url = pckg.url;

export const global = css`
  /* FONTS */

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('${url}/HalvarBreitschriftThin.ttf') format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('${url}/HalvarBreitschriftRegular.ttf') format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Halvar Breitschrift';
    src: url('${url}/HalvarBreitschriftBold.ttf') format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Halvar Mittelschrift';
    src: url('${url}/HalvarMittelschriftRegular.ttf')
      format('truetype');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Halvar Mittelschrift';
    src: url('${url}/HalvarMittelschriftBold.ttf') format('truetype');
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
    box-sizing: border-box;
  }
`;
