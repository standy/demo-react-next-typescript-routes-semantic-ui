import React from 'react';
import {Segment, Loader, Menu} from 'semantic-ui-react';
import SomeItem from './SomeItem';
import SomeFilterForm from './SomeFilterForm';
import SomeSortForm from './SomeSortForm';

type Props = {
	maxCount?: number;
}

export class SomeList extends React.Component<Props> {
	state = {
		loading: true,
		list: [],
		airlines: [],
		filter: null,
		variant: '',
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

	compareBySort = (a, b): number => {
		const {variant} = this.state;

		if (!variant) return;
		if (variant === 'time') {
			return a.departureTime.localeCompare(b.departureTime);
		}
		if (variant === 'arrivalAirport') {
			return a.arrivalAirport.name.localeCompare(b.arrivalAirport.name);
		}
		if (variant === 'airline') {
			return a.airline.name.localeCompare(b.airline.name);
		}
	};

	handleFilterChange = (filter) => {
		this.setState({
			filter: filter,
		});
	};

	handleSortChange = (variant) => {
		this.setState({
			variant: variant.variant,
		});
	};

	handleBookItem = (item) => {
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
		activeList.sort(this.compareBySort);

		return (
			<React.Fragment>
				<Menu secondary>
					<SomeFilterForm airlinesList={airlines} onFilterChange={this.handleFilterChange} />

					<Menu.Item position='right'>
						Всего: {activeList.length} из {list.length}
					</Menu.Item>
				</Menu>

				<Menu secondary>
					<SomeSortForm onSortChange={this.handleSortChange} />
				</Menu>

				<Segment>
					{activeList.map(item =>
						<SomeItem key={item.id} item={item} onBook={this.handleBookItem} />
					)}
				</Segment>
			</React.Fragment>
		);
	}
}
