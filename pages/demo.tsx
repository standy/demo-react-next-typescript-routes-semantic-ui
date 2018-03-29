import React from 'react';
import Layout from '../components/Layout';
import DemoList from '../components/DemoList';


const DemoPage = ({url}) => (
	<Layout title='DEMO'>

		<DemoList delay={100} />

	</Layout>
);

export default DemoPage;
