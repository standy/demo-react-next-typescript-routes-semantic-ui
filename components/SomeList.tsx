import React from 'react';
import {Segment, Loader, Menu} from 'semantic-ui-react';
import SomeItem from './SomeItem';
import SomeForm from './SomeForm';

type Props = {
	maxCount?: number;
}

export class SomeList extends React.Component<Props> {
	state = {
		loading: true,
		list: [],
		airlines: [],
		filter: null,
	};

	componentDidMount() {
		const {maxCount} = this.props;
		import('../components/data.json')
			.then(res => res
				.slice(0, maxCount)
				.map((x, i) => ({
					...x,
					id: i,
				}))
			)
			.then(this.setList);
	}

	setList = (list) => {
		const airlines = [];
		list.forEach(item => {
			const {code, name} = item.airline;
			if (airlines.some(a => a.value === code)) return;
			airlines.push({
				key: code,
				text: name,
				value: code,
			})
		});

		this.setState({
			loading: false,
			list,
			airlines,
		});
	};

	isActive = (item): boolean => {
		const {filter} = this.state;
		return !filter ||(
			(
				!filter.search ||
				`${item.departureAirport.name} - ${item.arrivalAirport.name}`.toLowerCase().includes(filter.search.toLowerCase())
			) &&
			(
				!filter.airlines.length ||
				filter.airlines.includes(item.airline.code)
			)
		)
	};

	onFilterChange = (filter) => {
		this.setState({
			filter: filter,
		});
	};

	onBookItem = (item) => {
		console.log('Забронирован перелёт:', item);
	};

	render() {
		const {list, loading, airlines} = this.state;
		if (loading) {
			return (
				<Loader active />
			);
		}

		const activeList = list.filter(this.isActive);

		return (
			<React.Fragment>
				<Menu secondary>
					<SomeForm airlinesList={airlines} onFilterChange={this.onFilterChange} />

					<Menu.Item position='right'>
						Всего: {activeList.length} из {list.length}
					</Menu.Item>
				</Menu>

				<Segment>
					{activeList.map(item =>
						<SomeItem key={item.id} item={item} onBook={this.onBookItem} />
					)}
				</Segment>
			</React.Fragment>
		);
	}
}
