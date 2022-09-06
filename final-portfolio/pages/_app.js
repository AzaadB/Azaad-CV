import "../styles/profile.css";
import Head from "next/head"; //importing head module from next//
import Script from "next/script"; //importing Script component from next.js
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  //exporting a function//
  return (
    <>
      {/*creating script component (line 10) Inside the first script component(line 10),
      we are passing a strategy(line 11),and a source of the script(line 14) */}
       <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-527ZWFHW3B"
      ></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-527ZWFHW3B');`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
