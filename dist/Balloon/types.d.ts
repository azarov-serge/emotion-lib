import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface BalloonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    color?: string;
}
