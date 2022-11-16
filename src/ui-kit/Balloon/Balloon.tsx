import React, { FC } from 'react';
import { BalloonProps } from './types';
import './Balloon.css';

export const Balloon: FC<BalloonProps> = (props) => {
	const { color = '#cccccc', children } = props;

	return (
		<div className="balloon" style={{ background: color }}>
			{children}
		</div>
	);
};
