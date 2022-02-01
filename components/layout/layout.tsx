
import * as React from 'react'
import {Topbar} from "./../../components/topbar/topbar";
import {Footer} from "./../../components/footer/footer";

import Head from 'next/head'
type LayoutProps = {
	title?: string
}
const Layout: React.FC<LayoutProps> = ({ children, title }) => {
	return ( 
		<main className="layout">
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
				<link rel="stylesheet" href="https://use.typekit.net/vfw0siz.css"/>
			</Head>
			<Topbar/>
			{children}
			<Footer/>
		</main>)
}
export default Layout