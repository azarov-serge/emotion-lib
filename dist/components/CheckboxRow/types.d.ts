import { PriceTextProps } from '../../ui-kit';
import { CheckboxProps } from '../../ui-kit/Checkbox';
export interface CheckboxRowProps {
    /** Свойства чекбокса */
    checkBoxProps: CheckboxProps;
    /** Цена */
    price?: string;
    /** Свойства цены */
    priceTextProps?: PriceTextProps;
    /** Признак блочной модели */
    block?: boolean;
    /** Нижний отступ */
    mb?: number;
}
