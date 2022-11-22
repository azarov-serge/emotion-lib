import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';
import { Button } from '../../ui-kit/Button';
import { UiKitTheme } from '../../ui-kit/@themes';
import { defaultProps } from './ProductCard.defaultProps';
import { ProductCardProps, ProductCardType } from './types';

type typeToStyle = Record<ProductCardType, SerializedStyles>;

type WrapperProps = Required<Pick<ProductCardProps, 'type'>>;
export const Wrapper = styled.div<WrapperProps>((props) => {
	const { type = defaultProps.type, theme } = props;
	const { wrapper } = (theme as UiKitTheme).productCard;

	const typeToStyle: typeToStyle = {
		cart: css`
			display: flex;
			width: auto;
			height: 104px;
			padding: 16px;
		`,
		default: css`
			display: block;
			width: 167px;
			height: 320px;
			padding: 0;
		`,
	};

	return css`
		position: relative;
		${typeToStyle[type].styles}
		border-radius: 24px;
		box-sizing: border-box;
		overflow: hidden;
		${wrapper[type].styles}
	`;
});

Wrapper.displayName = 'Wrapper';

type ImgProps = Required<Pick<ProductCardProps, 'type' | 'img'>>;

export const Img = styled.div<ImgProps>((props) => {
	const { img: imgUrl, type = defaultProps.type, theme } = props;
	const { img } = (theme as UiKitTheme).productCard;

	const typeToStyle: typeToStyle = {
		cart: css`
			width: 72px;
			height: 72px;
			margin: 0 16px 0 0;
			background-size: cover;
			border-radius: 24px;
		`,
		default: css`
			width: 100%;
			height: 100%;
			margin: 0;
			background-size: unset;
			border-radius: 0;
		`,
	};

	return css`
		${typeToStyle[type].styles}
		box-sizing: border-box;

		background-repeat: no-repeat;
		box-sizing: border-box;

		${img.styles};
		background-image: url('${imgUrl}');
	`;
});

Img.displayName = 'Img';

type ShadowProps = Required<Pick<ProductCardProps, 'type'>>;

export const Shadow = styled.div<ShadowProps>((props) => {
	const { type, theme } = props;
	const { shadow } = (theme as UiKitTheme).productCard;

	const typeToStyle: typeToStyle = {
		cart: css`
			width: calc(100% - 100px);
			height: 100%;
			padding: 0;
    `,
		default: css`
			width: calc(100% + 4px);
			height: 168px;
			padding: 8px;
    `,
	};

	const isDefault = type === 'default';

	return css`
		${isDefault &&
		`
    position: absolute;
    left: -2px;
    bottom: -2px;
  `}
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		${typeToStyle[type].styles}
		${shadow[type].styles}
	`;
});

Shadow.displayName = 'Shadow';

type TextProps = Required<Pick<ProductCardProps, 'type'>>;

export const Text = styled.p<TextProps>((props) => {
	const { type, theme } = props;
	const { text } = (theme as UiKitTheme).productCard;

	const typeToStyle: typeToStyle = {
		cart: css`
			font-weight: 700;
			font-size: 13px;
			line-height: 18px;
		`,
		default: css`
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		`,
	};

	return css`
		margin: 0;
		font-style: normal;
		${typeToStyle[type].styles}
		${text[type].styles}
	`;
});

Text.displayName = 'Text';

export const SubTextWrapper = styled.div(() => {
	return css`
		display: flex;
		align-items: center;
	`;
});

SubTextWrapper.displayName = 'SubTextWrapper';

type SubTextProps = Required<Pick<ProductCardProps, 'type'>>;

export const SubText = styled.span<SubTextProps>((props) => {
	const { type, theme } = props;
	const { subText } = (theme as UiKitTheme).productCard;

	const typeToStyle: typeToStyle = {
		cart: css`
			margin: 0 0 4px 0;
			font-size: 12px;
			line-height: 18px;
		`,
		default: css`
			margin: 0;
			font-size: 16px;
			line-height: 24px;
		`,
	};

	return css`
		font-style: normal;
		font-weight: 500;
		${typeToStyle[type].styles}
		${subText.styles};
	`;
});

SubText.displayName = 'SubText';

export const Separator = styled.div((props) => {
	const { theme } = props;
	const { separator } = (theme as UiKitTheme).productCard;

	return css`
		width: 4px;
		height: 4px;

		margin: 0 8px;

		border-radius: 50%;
		${separator.styles}
	`;
});

Separator.displayName = 'Separator';

export const CardButtonWrapper = styled.div(() => {
	return css`
		display: flex;
		align-items: center;
		justify-content: space-between;
	`;
});

CardButtonWrapper.displayName = 'CardButtonWrapper';

export const CardButton = styled(Button)`
	height: 56px;
`;

CardButton.displayName = 'CardButton';

export const CloseButton = styled.button((props) => {
	const { theme } = props;
	const { closeButton } = (theme as UiKitTheme).productCard;
	return css`
		position: absolute;
		top: 16px;
		right: 16px;
		width: 24px;
		height: 24px;
		margin: 0;
		padding: 0;
		cursor: pointer;
		border: none;

		${closeButton.styles}
	`;
});

CloseButton.displayName = 'CloseButton';
