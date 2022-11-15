import { CSSProperties } from 'react';
export declare type IconName = keyof typeof IconNameEnum;
export interface IconProps {
    /** наименование иконки из списка доступных  */
    name: IconName;
    /** ширина иконки */
    width?: number;
    /** высота иконки */
    height?: number;
    /** цвет заливки */
    fill?: string;
    /** дополнительные кастомные стили для иконки */
    iconStyles?: CSSProperties;
    /** бесконечная анимация вращения иконки */
    rotate?: boolean;
    /** Внешний класс для стилей */
    className?: string;
    /** нижний внешний отступ */
    mb?: number;
}
export declare enum IconNameEnum {
    approveTick = "approveTick",
    closeFill = "closeFill",
    close = "close",
    minus = "minus",
    plus = "plus",
    research = "research",
    rightArrow = "rightArrow",
    spinner = "spinner",
    warning = "warning",
    star = "star",
    checkGreen = "checkGreen",
    closeRed = "closeRed",
    warningYellow = "warningYellow",
    sushi = "sushi",
    pizza = "pizza",
    hotBeverage = "hotBeverage",
    hamburger = "hamburger",
    greenApple = "greenApple",
    frenchFries = "frenchFries"
}
