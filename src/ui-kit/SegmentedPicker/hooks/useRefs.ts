import React, { useMemo } from 'react';
import { SegmentedPickerItem } from '../types';

export const useRefs = (items: SegmentedPickerItem[]) => {
	return useMemo(() => {
		return items.map(() => React.createRef<HTMLLabelElement>());
	}, [items]);
};
