import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const container =
	(document && document.body) ||
	(document && document.querySelector('#modal')) ||
	null;

export const Portal = (props: { children: ReactNode }) => {
	const { children } = props;
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, container)
		: null;
};
