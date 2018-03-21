import React from 'react';
import {Form} from 'semantic-ui-react';

const options = [
	{key: 'm', text: 'Male', value: 'male'},
	{key: 'f', text: 'Female', value: 'female'},
];

const FormExampleSubcomponentControl = () => (
	<Form>
		<Form.Group widths='equal'>
			<Form.Input fluid label='First name' placeholder='First name'/>
			<Form.Input fluid label='Last name' placeholder='Last name'/>
			<Form.Select fluid label='Gender' options={options} placeholder='Gender'/>
		</Form.Group>
		<Form.Group inline>
			<label>Size</label>
			<Form.Radio name='size' label='Small' value='sm' />
			<Form.Radio name='size' label='Medium' value='md' />
			<Form.Radio name='size' label='Large' value='lg' />
		</Form.Group>
		<Form.TextArea label='About' placeholder='Tell us more about you...'/>
		<Form.Checkbox label='I agree to the Terms and Conditions'/>
		<Form.Button type='submit'>Submit</Form.Button>
	</Form>
);

export default FormExampleSubcomponentControl;
