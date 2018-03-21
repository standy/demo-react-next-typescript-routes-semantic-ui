import React from 'react';
import Layout from '../components/Layout';
import {delay} from '../components/utils';
import {Button, Divider} from 'semantic-ui-react';
import Router from 'next/router';

const A = ({delayedProps, url}) => (
	<Layout title='ABOUT'>
		delayedProps: {delayedProps}

		<Divider />

		<Button onClick={() => {
			Router.push({
				pathname: url.pathname,
				query: {clicked: '1'},
			});
		}}>Click me</Button>
	</Layout>
);

(A as any).getInitialProps = async () => {
	await delay(10);
	return {delayedProps: 'passed'}
};

export default A;
