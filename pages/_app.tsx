// import App from "next/app";
import React, { useEffect} from 'react';
import type {AppProps}
from 'next/app'
import {ApolloProvider} from '@apollo/client';
import client from "../lib/apollo";
import '../styles/global.sass'
import '../styles/design.tokens.sass'
import '../styles/variables.module.sass'
import Layout from '../components/layout/layout'
import * as gtag from '../lib/gtag'



export default function App({Component, pageProps, router} : AppProps) {
    

    useEffect(() => {
      const handleRouteChange = url => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])
  
    return (
        <Layout {...pageProps} router={router}>
            <ApolloProvider client={client}>
                <Component {...pageProps}/>
            </ApolloProvider>
        </Layout>
    )

}



