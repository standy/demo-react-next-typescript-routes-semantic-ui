import React from 'react';
import {Dropdown} from 'semantic-ui-react';

type ComboboxItem = {
	text: string;
	value: string;
}

type ComboboxProps = {
	getList(inputValue: string): Promise<ComboboxItem[]>
}

class Combobox extends React.Component<ComboboxProps> {
	state = {
		list: [],
	};

	handleChange = async (_e, data) => {
		const list = await this.props.getList(data.searchQuery);
		this.setState(() => (
			{list}
		));
	};

	render() {
		const {list} = this.state;
		return <Dropdown search={x => x} selection options={list} onSearchChange={this.handleChange} />
	}
}

export default Combobox;
