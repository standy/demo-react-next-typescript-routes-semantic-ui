import React from 'react';
import {Card, Button} from 'semantic-ui-react';

export default ({item, onBook}) => (
	<Card fluid>
		<Card.Content>
			<Card.Header>
				{item.departureTime}
			</Card.Header>
			<Card.Meta style={{float: 'right'}} textAlign='right'>
				{item.airline.name}
			</Card.Meta>
			<Card.Meta>
				{item.aircraft.name}
			</Card.Meta>
			<Card.Description>
				{item.departureAirport.name} - {item.arrivalAirport.name}
			</Card.Description>
		</Card.Content>
		<Card.Content extra>
			<Button basic color='green' onClick={() => onBook(item)}>Забронировать</Button>
		</Card.Content>
	</Card>
);
