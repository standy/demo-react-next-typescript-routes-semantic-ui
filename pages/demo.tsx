import React from 'react';
import Layout from '../components/Layout';
import Combobox from '../components/Combobox';
import {delay} from '../components/utils';
import {Divider} from 'semantic-ui-react';
import MyToggler from '../components/MyToggler';

async function getListExample(input) {
	const list = [
		{key: 'angular', text: 'Angular', value: 'angular'},
		{key: 'css', text: 'CSS', value: 'css'},
		{key: 'design', text: 'Graphic Design', value: 'design'},
		{key: 'ember', text: 'Ember', value: 'ember'},
		{key: 'html', text: 'HTML', value: 'html'},
		{key: 'ia', text: 'Information Architecture', value: 'ia'},
		{key: 'javascript', text: 'Javascript', value: 'javascript'},
		{key: 'mech', text: 'Mechanical Engineering', value: 'mech'},
		{key: 'meteor', text: 'Meteor', value: 'meteor'},
		{key: 'node', text: 'NodeJS', value: 'node'},
		{key: 'plumbing', text: 'Plumbing', value: 'plumbing'},
		{key: 'python', text: 'Python', value: 'python'},
		{key: 'rails', text: 'Rails', value: 'rails'},
		{key: 'react', text: 'React', value: 'react'},
		{key: 'repair', text: 'Kitchen Repair', value: 'repair'},
		{key: 'ruby', text: 'Ruby', value: 'ruby'},
		{key: 'ui', text: 'UI Design', value: 'ui'},
		{key: 'ux', text: 'User Experience', value: 'ux'},
	];

	await delay(100);

	return list.slice(Math.max(1, list.length - input.length));
}

const DemoPage = ({url}) => (
	<Layout title='DEMO'>

		<Combobox getList={getListExample}/>

		<Divider />

		<a href="/demo?test=passed">click</a>
        <MyToggler myOpen={url.query.test === 'passed'} />

	</Layout>
);

export default DemoPage;
