import React from 'react';
import Layout from '../components/Layout';
import FormExampleSubcomponentControl from '../components/FormExampleSubcomponentControl';

const FormPage = () => (
	<Layout title='FORM PAGE'>
		<FormExampleSubcomponentControl onSubmit={(v) => console.log('SUBMITED!', v)} />
	</Layout>
);

export default FormPage;
