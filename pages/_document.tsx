
import React, { useEffect} from 'react';
import * as gtag from '../lib/gtag'
import Document, {DocumentContext, Html, Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

type DocType =  {
     styles: any[];
     html: string;
     head?: JSX.Element[];
}

export default class MyDocument extends Document<DocType>  {
    
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props}/>)
            })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: ([initialProps.styles, sheet.getStyleElement()])
            }
        } finally {
            sheet.seal()
        }


    }
    
    
    render() {
        return (
            <Html lang="en">
                <Head>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}