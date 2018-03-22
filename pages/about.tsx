import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import {delay} from '../components/utils';
import {Button, Divider, Modal, Image, Icon, Header} from 'semantic-ui-react';
import Router from 'next/router';

const A = ({delayedProps, url}) => (
	<Layout title='ABOUT'>
		delayedProps: {delayedProps}

		<Divider />

		<Link href={{pathname: url.pathname, query: {clicked: '1'},}} passHref>
			<Button as='a'>Click me</Button>
		</Link>


		<Modal open={url.query.clicked === '1'} onClose={() => {
			Router.push({
				pathname: url.pathname,
				query: {},
			});
		}}>
			<Modal.Header>Profile Picture</Modal.Header>
			<Modal.Content image scrolling>
				<Image
					size='medium'
					src='https://react.semantic-ui.com/assets/images/wireframe/image.png'
					wrapped
				/>

				<Modal.Description>
					<Header>Modal Header</Header>
					<p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

					{[1,2,3,4,5,6,7,8].map(i => (
						<Image
							key={i}
							src='https://react.semantic-ui.com/assets/images/wireframe/paragraph.png'
							style={{paddingBottom: 5}}
						/>
					))}
				</Modal.Description>
			</Modal.Content>
			<Modal.Actions>
				<Button primary>
					Proceed <Icon name='chevron right'/>
				</Button>
			</Modal.Actions>
		</Modal>
	</Layout>
);

(A as any).getInitialProps = async () => {
	await delay(10);
	return {delayedProps: 'passed'}
};

export default A;
