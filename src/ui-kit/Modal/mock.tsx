import React, { FC } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Title } from '../Typography';
import { ModalProps } from './types';

export const Content: FC<{ onClose?: ModalProps['onClose'] }> = (props) => {
	const { onClose } = props;

	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Icon
					name="greenApple"
					iconStyles={{ width: '44px', height: '44px', marginRight: '10px' }}
				/>
				<Title level={2}>Заказ оплачен</Title>
			</div>
			<p>Ожидайте, скоро курьер доставит вам заказ.</p>
			<Button block mb={10}>
				Перейти в мои заказы
			</Button>
			<Button block kind="secondary" onClick={onClose}>
				Закрыть
			</Button>
		</>
	);
};
