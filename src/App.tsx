import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { Title, GlobalStyle } from './ui-kit';
import { uiKitTheme } from './ui-kit/@themes';
import { ButtonsDemo } from './ui-kit/Button/demo';
import { IconsDemo } from './ui-kit/Icon/demo';
import { TextsDemo } from './ui-kit/Typography/Text/demo';
import { TitlesDemo } from './ui-kit/Typography/Title/demo';
import { PriceTextsDemo } from './ui-kit/Typography/PriceText/demo';
import { CheckboxDemo } from './ui-kit/Checkbox/demo';
import { TabBarsDemo } from './ui-kit/TabBar/demo';
import { CheckboxRowDemo } from './components/CheckBoxRow/demo';

export const App = () => {
	return (
		<ThemeProvider theme={uiKitTheme.foodCity}>
			<div style={{ padding: 25 }}>
				<Title level={2}>Кнопки</Title>
				<ButtonsDemo />
				<hr />

				<Title level={2}>Иконки</Title>
				<IconsDemo />
				<hr />

				<div style={{ display: 'flex' }}>
					<div style={{ width: '30%' }}>
						<Title level={2} align="left">
							Заголовки
						</Title>
						<TitlesDemo />
					</div>
					<div style={{ width: '30%' }}>
						<Title level={2} align="left">
							Текст
						</Title>
						<TextsDemo />
					</div>
					<div style={{ width: '30%' }}>
						<Title level={2} align="left">
							Price
						</Title>
						<PriceTextsDemo />
					</div>
				</div>
				<hr />

				<Title level={2}>Checkbox</Title>
				<CheckboxDemo />
				<hr />

				<Title level={2}>TabBar</Title>
				<TabBarsDemo />
				<hr />

				<div style={{ display: 'flex' }}>
					<div style={{ width: '45%' }}>
						<Title level={2}>Checkbox Row</Title>
						<CheckboxRowDemo />
					</div>
					<div style={{ width: '45%' }}>
						<Title level={2}>Info Row</Title>
						{/* <DemoInfoRow /> */}
					</div>
				</div>
				<hr />
			</div>
			<GlobalStyle />
		</ThemeProvider>
	);
};
