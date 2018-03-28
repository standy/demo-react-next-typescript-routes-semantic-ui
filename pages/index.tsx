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

// Define our `fg` and `bg` on the theme
const theme = {
	fg: 'palevioletred',
	bg: 'white'
};

// This theme swaps `fg` and `bg`
const invertTheme = ({fg, bg}) => ({
	fg: bg,
	bg: fg
});


export default () => (
	<ThemeProvider theme={theme}>
		<Layout>

			<MyButton>Default Theme</MyButton>

			<Divider/>

			<ThemeProvider theme={invertTheme}>
				<MyButton>Inverted Theme</MyButton>
			</ThemeProvider>

		</Layout>
	</ThemeProvider>
);
