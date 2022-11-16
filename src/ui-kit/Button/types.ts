import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type ButtonKind = 'primary' | 'secondary';

export interface ButtonProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	kind?: ButtonKind;
}
