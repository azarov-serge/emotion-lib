import React from 'react';
import { Button } from './Button';
import { Balloon } from './Balloon';

export const App = () => {
	return (
		<Balloon>
			<Button>Primary</Button>
			<Button kind="secondary">Secondary</Button>
		</Balloon>
	);
};
