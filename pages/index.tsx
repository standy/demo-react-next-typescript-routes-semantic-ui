import React from 'react';
import Layout from '../components/Layout';
import styled, {ThemeProvider} from 'styled-components';
import {Divider} from 'semantic-ui-react';

const MyButton = styled.button`
	color: ${props => props.theme.fg};
	border: 2px solid ${props => props.theme.fg};
	background: ${props => props.theme.bg};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
`;


const Container = styled.div`
	border: 5px solid ${props => props.theme.fg};
	outline: 5px solid ${props => props.theme.bg};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
`


// This theme swaps `fg` and `bg`
const invertTheme = {
	fg: 'cyan',
};


export default () => (
	
		<Layout>

			<Container>

				<MyButton>Default Theme</MyButton>

				<Divider/>

				<ThemeProvider theme={invertTheme}>
					<Container>
						<MyButton>Inverted Theme</MyButton>
					</Container>
				</ThemeProvider>
			</Container>
		</Layout>
	
);
