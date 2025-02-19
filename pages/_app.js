import { SessionProvider } from "next-auth/react";
import Layout from "./components/layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.scss';
import'@/styles/flags.min.css'
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Head from "next/head";
import { LoginContextProvider } from "@/context/loginStatus";


//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


export default function MyApp({ Component, pageProps :{ session, ...pageProps }}) {

    return (
      <>
       <Head>
       
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/img/favicon.ico" />
        <meta name="keywords" content="" />
        <meta property="og:type" content="Article" />
        <meta property="og:site_name" content="FastTrackVisa.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FastTrackVisa" />
        <meta name="twitter:creator" content="@FastTrackVisa" />
        <meta name="theme-color" content="#245cc1" />
        <meta name="robots" content="index,follow" />
        <meta name="checkout" content="https://fasttrackvisa.com/en-in/checkout/cambodia-business-e-visa/16?cnp=FTVNY"/>
        
        <meta name="google-site-verification" content="L0_50ckD83y8UrprubZ2rY3vo-2RucflVhKVAi_qSrg" />
        
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSNXH65"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}></noscript>
       </Head>
      <SessionProvider session={session}> 
      <LoginContextProvider>    
        <Layout>
            <Component {...pageProps} />
        </Layout>    
      </LoginContextProvider>
     </SessionProvider> 
     </>
    )
  }