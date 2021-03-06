
import * as React from 'react'
import {Topbar} from "./../../components/topbar/topbar";
import {Footer} from "./../../components/footer/footer";

import Head from 'next/head'
type LayoutProps = {
	title?: string
	router?: {query: {slug: string}}
}
const Layout: React.FC<LayoutProps> = ({ children, title, router }) => {
	const {query} = router
	const rota = query && query.slug ? 'page' : 'home'
	return ( rota && (
		<main className={`${rota}`}>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8"/>
				{/* <meta name="viewport" content="viewport-fit=cover" /> */}
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
				{/* <meta name="viewport" content="initial-scale=1.0, width=device-width"/> */}
				<link rel="stylesheet" href="https://use.typekit.net/vfw0siz.css"/>
			</Head>
			<Topbar/>
			{children}
			<Footer  />
		</main>)
		)
}
export default Layout