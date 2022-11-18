import React, { CSSProperties, useState } from 'react';
import { Title } from '../Typography';
import { Button } from './Button';

const smallButtonStyle: CSSProperties = {
	width: '150px',
	marginRight: '5px',
};

export const ButtonsDemo = () => {
	const [spin, setSpin] = useState(true);
	const spinToggle = () => setSpin(!spin);

	return (
		<div>
			<div style={{ paddingTop: 0, display: 'flex' }}>
				<div style={{ width: 340, marginRight: 10 }}>
					<Title level={3}>primary</Title>
					<Button kind="primary" block mb={30} icon="approveTick">
						Primary
					</Button>
					<Button
						kind="primary"
						block
						loading={spin}
						icon="approveTick"
						mb={30}
						onClick={spinToggle}
					>
						Primary
					</Button>
					<Button kind="primary" block disabled mb={30}>
						Primary
					</Button>
				</div>
				<div style={{ width: 340, marginRight: 10 }}>
					<Title level={3}>secondary</Title>
					<Button kind="secondary" icon="approveTick" block mb={30}>
						Action
					</Button>
					<Button
						kind="secondary"
						block
						loading={spin}
						icon="approveTick"
						mb={30}
						onClick={spinToggle}
					>
						Action
					</Button>
					<Button kind="secondary" block disabled mb={30}>
						Action
					</Button>
				</div>
				<div style={{ width: 340, marginRight: 10 }}>
					<Title level={3}>ghost</Title>
					<Button kind="ghost" icon="approveTick" block mb={30}>
						Action
					</Button>
					<Button
						kind="ghost"
						block
						loading={spin}
						icon="approveTick"
						mb={30}
						onClick={spinToggle}
					>
						Action
					</Button>
					<Button kind="ghost" block disabled mb={30}>
						Action
					</Button>
				</div>
				<div style={{ width: 340, marginRight: 10 }}>
					<Title level={3}>danger</Title>
					<Button kind="danger" icon="approveTick" block mb={30}>
						Action
					</Button>
					<Button
						kind="danger"
						block
						loading={spin}
						icon="approveTick"
						mb={30}
						onClick={spinToggle}
					>
						Action
					</Button>
					<Button kind="danger" block disabled mb={30}>
						Action
					</Button>
				</div>
			</div>
			<div style={{ width: 340, marginRight: 10 }}>
				<Title level={3}>small</Title>
				<div style={{ display: 'flex' }}>
					<div>
						<Button
							kind="primary"
							icon="approveTick"
							size="small"
							mb={30}
							style={smallButtonStyle}
						>
							Primary
						</Button>
						<Button
							kind="primary"
							size="small"
							icon="approveTick"
							loading={spin}
							block
							mb={30}
							onClick={spinToggle}
							style={smallButtonStyle}
						>
							Primary
						</Button>
						<Button
							kind="primary"
							size="small"
							disabled
							mb={30}
							style={smallButtonStyle}
						>
							Primary
						</Button>
					</div>

					<div>
						<Button
							kind="secondary"
							icon="approveTick"
							size="small"
							mb={30}
							style={smallButtonStyle}
						>
							Secondary
						</Button>

						<Button
							kind="secondary"
							size="small"
							icon="approveTick"
							loading={spin}
							block
							mb={30}
							onClick={spinToggle}
							style={smallButtonStyle}
						>
							Secondary
						</Button>

						<Button
							kind="secondary"
							size="small"
							disabled
							block
							mb={30}
							onClick={spinToggle}
							style={smallButtonStyle}
						>
							Secondary
						</Button>
					</div>

					<div>
						<Button
							kind="ghost"
							icon="approveTick"
							size="small"
							mb={30}
							style={smallButtonStyle}
						>
							Ghost
						</Button>
						<Button
							kind="ghost"
							size="small"
							icon="approveTick"
							loading={spin}
							block
							mb={30}
							onClick={spinToggle}
							style={smallButtonStyle}
						>
							Ghost
						</Button>
						<Button
							kind="ghost"
							size="small"
							disabled
							mb={30}
							style={smallButtonStyle}
						>
							Ghost
						</Button>
					</div>

					<div>
						<Button
							kind="danger"
							icon="approveTick"
							size="small"
							mb={30}
							style={smallButtonStyle}
						>
							Danger
						</Button>

						<Button
							kind="danger"
							size="small"
							icon="approveTick"
							loading={spin}
							block
							mb={30}
							onClick={spinToggle}
							style={smallButtonStyle}
						>
							Danger
						</Button>

						<Button
							kind="danger"
							disabled
							size="small"
							mb={30}
							style={smallButtonStyle}
						>
							Danger
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
