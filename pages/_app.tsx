// import App from "next/app";
import type {AppProps}
from 'next/app'
import {ApolloProvider} from '@apollo/client';
import client from "../lib/apollo";
import '../styles/global.sass'
import '../styles/design.tokens.sass'
import '../styles/variables.module.sass'
import Layout from '../components/layout/layout'



export default function App({Component, pageProps, router} : AppProps) {
    return (
        <Layout {...pageProps}>
            <ApolloProvider client={client}>
                <Component {...pageProps}/>
            </ApolloProvider>
        </Layout>
    )

}



