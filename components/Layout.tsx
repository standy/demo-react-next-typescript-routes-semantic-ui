import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children, title = 'APP TITLE'}) => (
	<div className="layout">
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8'/>
			<meta name='viewport' content='initial-scale=1.0, width=device-width'/>
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
		</Head>

		<nav>
			<ul>
				<li><Link href='/about' as='/about'><a>About</a></Link></li>
				<li><Link href='/form' as='/form'><a>FormPage</a></Link></li>
			</ul>
		</nav>

		{children}

		<style jsx>{`
			.layout {
				width: 800px;
				margin: 0 auto;
			}

			nav {
				margin: 20px 0;
			}

			nav ul {
				margin: 0;
				padding: 0;
			}

			nav li {
				display: inline-block;
				margin-right: 20px;
			}
		`}</style>
	</div>
);

export default Layout;
