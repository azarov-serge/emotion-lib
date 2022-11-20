import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BaseRowProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** Признак блочной модели */
  block?: boolean;

  /** Нижний отступ */
  mb?: number;
}
