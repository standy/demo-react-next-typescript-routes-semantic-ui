import React from 'react';
import {Form, Message} from 'semantic-ui-react';
import {withFormik} from 'formik';

const options = [
	{key: 'm', text: 'Male', value: 'male'},
	{key: 'f', text: 'Female', value: 'female'},
];

const FormExampleSubcomponentControl = ({
    values,
    errors,
    // touched,
	setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => (
	<Form onSubmit={handleSubmit} error={Object.keys(errors).length > 0}>
		<Form.Group widths='equal'>
			<Form.Input name='firstName' error={!!errors.firstName} value={values.firstName} fluid label='First name' placeholder='First name' onChange={handleChange} onBlur={handleBlur} />
			<Form.Input name='lastName' error={!!errors.lastName} value={values.lastName} fluid label='Last name' placeholder='Last name' onChange={handleChange} onBlur={handleBlur} />
			<Form.Select name='gender' error={!!errors.gender} value={values.gender} id='gender' fluid label='Gender' options={options} placeholder='Gender' onChange={(_e, {name, value}) => setFieldValue(name, value)} />
		</Form.Group>
		<Form.Group inline error={errors.size}>
			<label>Size</label>
			<Form.Radio name='size' checked={values.size === 'sm'} id='zzsm' label='Small' value='sm' onChange={handleChange} onBlur={handleBlur} />
			<Form.Radio name='size' checked={values.size === 'md'} id='zzmd' label='Medium' value='md' onChange={handleChange} onBlur={handleBlur} />
			<Form.Radio name='size' checked={values.size === 'lg'} id='zzlg' label='Large' value='lg' onChange={handleChange} onBlur={handleBlur} />
		</Form.Group>
		<Form.TextArea name='comment' error={!!errors.comment} value={values.comment} label='About' placeholder='Tell us more about you...' onChange={handleChange} onBlur={handleBlur} />
		<Form.Checkbox name='agree' error={!!errors.agree} id='agree' checked={values.agree} label='I agree to the Terms and Conditions' onChange={handleChange} onBlur={handleBlur} />
		<Form.Button type='submit' loading={isSubmitting}>Submit</Form.Button>
		<Message
			error
			header='Ошибки валидации'
			content={JSON.stringify(errors, null, 2)}
		/>
	</Form>
);

type FormProps = {
	onSubmit: (values: FormValues) => void;
};
type FormValues = {
	firstName: string;
	lastName: string;
	gender: string;
	size: string;
	comment: string;
	agree: boolean;
};

export default withFormik<FormProps, FormValues>({
	// Transform outer props into form values
	mapPropsToValues: _props => ({
		firstName: '',
		lastName: '',
		gender: '',
		size: '',
		comment: '',
		agree: true,
	}),
	// Add a custom validation function (this can be async too!)
	validate: (values, _props) => {
		const errors: any = {};
		if (!values.agree) errors.agree = 'MUST AGREE';
		if (!values.firstName) errors.firstName = 'MUST firstName';
		if (!values.lastName) errors.lastName = 'MUST lastName';
		if (!values.gender) errors.gender = 'MUST gender';
		if (!values.size) errors.size = 'MUST size';
		if (!values.comment) errors.comment = 'MUST comment';
		return errors;
	},
	validateOnChange: false,
	validateOnBlur: false,
	// Submission handler
	handleSubmit: (values, {props}) => props.onSubmit(values),
})(FormExampleSubcomponentControl);
