import React from 'react';
import {Link, Router} from '../server/routes';
import Layout from '../components/Layout';
import {delay} from '../components/utils';
import {Button, Divider, Modal, Image, Icon, Header, Menu, Segment} from 'semantic-ui-react';

const AboutPage = ({delayedProps, url}) => (
	<Layout title='ABOUT'>
		delayedProps: {delayedProps}

		<Menu pointing secondary>
			<Link route='about' params={{...url.query, tab: null}} passHref>
				<Menu.Item active={!url.query.tab}>Об отелях</Menu.Item>
			</Link>
			<Link route='about' params={{...url.query, tab: 'feedbacks'}} passHref>
				<Menu.Item active={url.query.tab === 'feedbacks'}>Отзывы</Menu.Item>
			</Link>
			<Link route='about' params={{...url.query, tab: 'map'}} passHref>
				<Menu.Item active={url.query.tab === 'map'}>Карта</Menu.Item>
			</Link>
		</Menu>

		<Segment>
			<pre>
				{JSON.stringify(url, null, 2)}
			</pre>
		</Segment>

		<Divider />

		<Link route='about' params={{...url.query, clicked: '1'}} passHref>
			<Button as='a'>Click me</Button>
		</Link>

		<Divider />


		<Modal open={url.query.clicked === '1'} onClose={() => {
			Router.pushRoute('about', {...url.query, clicked: null});
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
				<Link route='about' params={{...url.query, clicked: null}} passHref>
					<Button primary>
						Proceed <Icon name='chevron right'/>
					</Button>
				</Link>
			</Modal.Actions>
		</Modal>
	</Layout>
);

(AboutPage as any).getInitialProps = async () => {
	await delay(10);
	return {delayedProps: 'passed'}
};

export default AboutPage;
