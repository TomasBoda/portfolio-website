import Head from "next/head";
import { useEffect } from "react";

import Layout from "../components/Layout";

import "../styles/app.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
                <script src="https://unpkg.com/ionicons@5.5.1/dist/ionicons.js"></script>
                <script src="https://smtpjs.com/v3/smtp.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />

                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
        
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                        `,
                    }}
                />
            </Head>

            <Component {...pageProps} />
        </Layout>
    )
}
