import { FC, ReactNode } from 'react';
import { Theme } from '@emotion/react';
export interface UiKitProviderProps {
    theme: Theme;
    children: ReactNode;
}
export declare const UiKitProvider: FC<UiKitProviderProps>;
