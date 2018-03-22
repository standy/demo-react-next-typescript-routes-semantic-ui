import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Menu, Divider} from 'semantic-ui-react';

const Layout = ({children, title = 'APP TITLE'}) => (
	<div className="layout">
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8'/>
			<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
		</Head>

		<nav>
			<Menu>
				<Link href='/about' passHref>
					<Menu.Item as='a'>About</Menu.Item>
				</Link>
				<Link href='/form' passHref>
					<Menu.Item as='a'>FormPage</Menu.Item>
				</Link>
			</Menu>
		</nav>

		<Divider />

		{children}

		<style jsx>{`
			.layout {
				width: 800px;
				margin: 0 auto;
			}

			nav {
				padding: 20px 0;
			}
		`}</style>
	</div>
);

export default Layout;
