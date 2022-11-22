import { InfoProps, InfoType } from './types';

export const defaultProps: Required<Pick<InfoProps, 'mb' | 'block' | 'type'>> =
	{
		mb: 0,
		block: true,
		type: InfoType.info,
	};
