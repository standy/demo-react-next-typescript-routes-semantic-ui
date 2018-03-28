import React from 'react';
import {Menu, Dropdown, Input} from 'semantic-ui-react';
import {DropdownItemProps} from 'semantic-ui-react/dist/commonjs/modules/Dropdown/DropdownItem';

type State = {
	airlines: DropdownItemProps[];
	search: string;
}

type Props = {
	airlinesList: DropdownItemProps[];
	onFilterChange(state: State): void;
}

export default class SomeForm extends React.Component<Props, State> {
	state = {
		airlines: [],
		search: '',
	};

	onFilterChange = (_e, {name, value}) => {
		this.setState(state => {
			const nextState = {
				...state,
				[name]: value,
			};
			this.props.onFilterChange(nextState);
			return nextState;
		});
	};

	render() {
		const {airlinesList} = this.props;

		return (
			<Menu.Menu>
				<Menu.Item>
					<Input name='search' placeholder='Поиск' onChange={this.onFilterChange} icon='search' />
				</Menu.Item>
				<Menu.Item>
					<Dropdown name='airlines' placeholder='Авиакомпании' multiple selection options={airlinesList} onChange={this.onFilterChange} style={{maxWidth: '400px'}} />
				</Menu.Item>
			</Menu.Menu>
		);
	}
}

