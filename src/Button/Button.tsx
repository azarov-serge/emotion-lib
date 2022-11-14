import React, {FC} from "react";
import * as Styled from './styles';
import {ButtonProps} from "./types";

export const Button: FC<ButtonProps> = (props) => {
    const { kind = 'primary', children } = props;

    return <Styled.Button kind={kind}>{children}</Styled.Button>
};