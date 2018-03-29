import React from 'react';
import { Segment, Divider, Loader, Button } from 'semantic-ui-react';
import DemoItem from './DemoItem';
import {delay} from './utils';


type State = {
    list: any[],
    loading: boolean,
    sortBy: string,
}
type Props = {
    delay: number;
}

export default class extends React.Component<Props, State> {
    state = {
        list: [],
        loading: true,
        sortBy: '',
    }

    async componentWillMount() {
        const data = await import('./data.json');

        await delay(this.props.delay);
        this.setState(prevState => ({
            ...prevState,
            list: data,
            loading: false,
        }))
    }

    handleSort = () => {
        this.setState(prevState => {
            const newList = prevState.list.slice(0).sort((a, b) => 
                a.airline.name.localeCompare(b.airline.name)
            );
            return {
                ...prevState,
                sortBy: 'airlineName',
                list: newList,
            }
        });
    }

    render() {
        const {list, loading} = this.state;

        if (loading) return <Loader active />;


        return (
            <Segment>
                
                <Button onClick={this.handleSort}>
                    SORT
                </Button>

                {list.map(item => (
                    <DemoItem item={{air: item.airline, fl: item.flightNumber}} />
                ))}
            </Segment>
        )
    }

}
