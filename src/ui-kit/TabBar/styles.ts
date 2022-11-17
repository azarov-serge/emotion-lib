import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Icon } from '../Icon';
import { UiKitTheme } from '../@themes';

export const Wrapper = styled.div((props) => {
  const { theme } = props;
  const { wrapper } = (theme as UiKitTheme).tabBar;

  return css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 83px;

    padding: 0 12px;
    box-shadow: 0px 0px 35px rgba(9, 9, 10, 0.1);
    border-radius: 32px 32px 0px 0px;

    ${wrapper};
  `;
});

interface TabProps {
  isActive: boolean;
  notification?: number | string;
}

export const Tab = styled.div<TabProps>((props) => {
  const { isActive, notification: notificationText, theme } = props;
  const { tab, tabHover, tabActive, tabIsActive, notification } = (
    theme as UiKitTheme
  ).tabBar;

  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 50px;

    padding: 6px 0px;

    cursor: pointer;
    ${tab};
    ${isActive && tabIsActive.styles};

    &:hover {
      ${tabHover.styles};
    }

    &:active {
      gap: 4px;
      border-radius: 8px;
      ${tabActive.styles};
    }

    ${notificationText &&
    `
        &::before {
          content: "${notificationText}";
          position: absolute;
          top: 4px;
          left: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          min-height: 12px;

          border-radius: 24px;
          font-style: normal;
          font-weight: 600;
          font-size: 8px;
          line-height: 8px;
          text-align: center;
          ${notification.styles};
        }
      `}
  `;
});

export const TabIcon = styled(Icon)`
  margin-bottom: 6px;
  svg {
    fill: currentColor;
  }
`;

export const ActiveState = styled.div((props) => {
  const { theme } = props;
  const { activeState } = (theme as UiKitTheme).tabBar;

  return css`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    ${activeState.styles}
  `;
});
