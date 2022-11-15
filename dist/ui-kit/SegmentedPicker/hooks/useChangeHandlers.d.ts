import { ChangeEvent, RefObject } from 'react';
import { SegmentedPickerItem, SegmentedPickerProps, SegmentedPickerValue } from '@/ui-kit/SegmentedPicker';
interface UseChangeHandlersProps {
    itemRefs: RefObject<HTMLLabelElement>[];
    items: SegmentedPickerItem[];
    defaultValue: SegmentedPickerValue | null;
    onChange: SegmentedPickerProps['onChange'];
}
interface UseChangeHandlersReturn {
    calculatePosition: () => void;
    handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    currentIndex: number | null;
    nextIndex: number | null;
    loading: boolean;
    activeWidth: number;
    activeOffset: number;
}
export declare const useChangeHandlers: (props: UseChangeHandlersProps) => UseChangeHandlersReturn;
export {};
