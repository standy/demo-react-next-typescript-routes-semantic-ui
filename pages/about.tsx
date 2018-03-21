import React from 'react';
import Layout from '../components/Layout';
import {delay} from '../components/utils';

const A = ({delayedProps}) => (
	<Layout title='ABOUT'>
		delayedProps: {delayedProps}
	</Layout>
);

(A as any).getInitialProps = async () => {
	await delay(10);
	return {delayedProps: 'passed'}
};

export default A;
