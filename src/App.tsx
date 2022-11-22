import React, { useState } from 'react';
import { UiKitProvider } from './providers/UiKitProvider';
import { SegmentedPicker, Title } from './ui-kit';
import { uiKitTheme } from './ui-kit/@themes';
import { ButtonsDemo } from './ui-kit/Button/demo';
import { IconsDemo } from './ui-kit/Icon/demo';
import { TextsDemo } from './ui-kit/Typography/Text/demo';
import { TitlesDemo } from './ui-kit/Typography/Title/demo';
import { PriceTextsDemo } from './ui-kit/Typography/PriceText/demo';
import { CheckboxDemo } from './ui-kit/Checkbox/demo';
import { TabBarsDemo } from './ui-kit/TabBar/demo';
import { CheckboxRowDemo } from './components/CheckboxRow/demo';
import { AmountsDemo } from './components/Amount/demo';
import { DividersDemo } from './ui-kit/Divider/demo';
import { DrawersDemo } from './ui-kit/Drawer/demo';
import { SegmentPickerDemo } from './ui-kit/SegmentedPicker/demo';
import { GridsDemo } from './ui-kit/Grid/demo';
import { InputsDemo } from './ui-kit/Input/demo';
import { SearchBarsDemo } from './components/SearchBar/demo';
import { TitleRowsDemo } from './components/TitleRow/demo';
import { TextRowsDemo } from './components/TextRow/demo';
import { ModalsDemo } from './ui-kit/Modal/demo';
import { NavBarsDemo } from './components/NavBar/demo';
import { SystemModalsDemo } from './ui-kit/SystemModal/demo';
import { RadioDemo } from './ui-kit/Radio/demo';
import { SelectsDemo } from './ui-kit/Select/demo';
import { MessagesDemo } from './ui-kit/Message/demo';
import { StepperDemo } from './ui-kit/Stepper/demo';
import { SwitchersDemo } from './ui-kit/Switcher/demo';
import { SwitcherRowsDemo } from './components/SwitcherRow/demo';
import { InfoDemo } from './components/Info/demo';
import { InfoRowsDemo } from './components/InfoRow/demo';
import { ProductCardsDemo } from './components/ProductCard/demo';

export const App = () => {
	const [theme, setTheme] = useState(uiKitTheme.foodCity);
	return (
		<UiKitProvider theme={theme}>
			<SegmentedPicker
				items={[
					{ label: 'Food City', value: 'foodCity' },
					{ label: 'NFTea', value: 'NFTea' },
				]}
				defaultValue="foodCity"
				onChange={(value) => {
					if (value === 'foodCity') {
						setTheme(uiKitTheme.foodCity);
					} else {
						setTheme(uiKitTheme.NFTea);
					}
				}}
			/>
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

				<Title level={2}>Amount</Title>
				<AmountsDemo />
				<br />
				<hr />

				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '50%', margin: 15 }}>
						<Title level={2}>Search Bar</Title>
						<SearchBarsDemo />
					</div>
					<div style={{ width: '50%', margin: 15 }}>
						<Title level={2}>Dividers</Title>
						<DividersDemo />
					</div>
				</div>
				<br />
				<hr />

				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '50%', margin: 15 }}>
						<Title level={2}>Checkbox</Title>
						<CheckboxDemo />
					</div>
					<div style={{ width: '50%', margin: 15 }}>
						<Title level={2}>Radio</Title>
						<RadioDemo />
					</div>
				</div>
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
						<InfoRowsDemo />
					</div>
				</div>
				<hr />

				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '50%' }}>
						<Title level={2}>Drawer</Title>
						<DrawersDemo />
					</div>
					<div style={{ width: '40%' }}>
						<Title level={2}>Modal</Title>
						<ModalsDemo />
					</div>
				</div>
				<br />
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ width: '30%' }}>
						<Title level={2}>SystemModal</Title>
						<SystemModalsDemo />
					</div>
					<div style={{ width: '70%' }}>
						<Title level={2}>Messages</Title>
						<MessagesDemo />
					</div>
				</div>
				<hr />

				<Title level={2}>Segment Picker</Title>
				<SegmentPickerDemo />
				<hr />

				<Title level={2}>Grids (Row and Col)</Title>
				<GridsDemo />

				<br />
				<br />
				<hr />

				<Title level={2}>Input</Title>
				<InputsDemo />
				<br />
				<hr />

				<Title level={2}>Title Row</Title>
				<TitleRowsDemo />
				<hr />

				<div style={{ display: 'flex' }}>
					<div style={{ width: '45%' }}>
						<Title level={2}>Switcher Row</Title>
						<SwitcherRowsDemo />
					</div>
					<div style={{ width: '45%' }}>
						<Title level={2}>Text Row</Title>
						<TextRowsDemo />
					</div>
				</div>
				<hr />

				<Title level={2}>NavBar</Title>
				<NavBarsDemo />
				<br />
				<hr />

				<Title level={2}>Selects</Title>
				<SelectsDemo />
				<br />
				<hr />

				<Title level={2}>Stepper</Title>
				<StepperDemo />
				<br />
				<hr />

				<div style={{ display: 'flex' }}>
					<div style={{ width: '45%' }}>
						<Title level={2}>Switcher</Title>
						<SwitchersDemo />
					</div>
					<div style={{ width: '45%' }}>
						<Title level={2}>Info</Title>
						<InfoDemo />
					</div>
				</div>
				<hr />

				<Title level={2}>Product Card</Title>
				<ProductCardsDemo />
				<br />
				<br />
			</div>
		</UiKitProvider>
	);
};
