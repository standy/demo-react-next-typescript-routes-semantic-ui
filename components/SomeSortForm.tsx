import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

type State = {
	variant: keyof typeof SORT_VARIANTS;
}

type Props = {
	onSortChange(state: State): void;
}

const SORT_VARIANTS = {
	time: {text: 'времени вылета'},
	arrivalAirport: {text: 'аэропорту'},
	airline: {text: 'авиакомпании'},
}

export default class SomeSortForm extends React.Component<Props, State> {
	state = {
		variant: 'time' as 'time',
	};

	handleSortChange = (_e, {name}) => {
		this.setState(state => {
			const nextState = {
				...state,
				variant: name,
			};
			this.props.onSortChange(nextState);
			return nextState;
		});
	};

	render() {
		const {variant} = this.state;
		return (
			<Menu.Menu>
				<Menu.Item>
					Сортировать по
				</Menu.Item>
				<Menu.Item>
					<Button.Group>
						{Object.keys(SORT_VARIANTS).map(v => (
							<Button name={v} key={v}  onClick={this.handleSortChange} basic={v !== variant} color='blue'>
								{SORT_VARIANTS[v].text}
							</Button>
						))}
					</Button.Group>
				</Menu.Item>
			</Menu.Menu>
		);
	}
}

