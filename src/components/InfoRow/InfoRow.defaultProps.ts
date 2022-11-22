import {InfoRowProps} from "./types";

export const defaultProps: Required<Pick<InfoRowProps, 'mb' | 'disabled' | 'block'>> = {
  mb: 0,
  disabled: false,
  block: true,
};
