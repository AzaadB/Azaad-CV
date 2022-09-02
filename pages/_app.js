import "../styles/profile.css";
import Script from "next/script"; //importing Script component from next.js
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  //exporting a function//
  return (
    <>
      {/*creating script component (line 10) Inside the first script component(line 10),
      we are passing a strategy(line 11),and a source of the script(line 14) */}
      <Script
        strategy="lazyOnLoad"
        /*The strategy we use for analytic tags,
      is called lazyOnLoad (line 23)*/
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_KEY}`}
      />
      {/*The source is the google tag obtained from google analytics(line 14)*/}

      {/*The second script(line 21) is similar to the first on except,
    intead of a source we add code inside this script which os inside brackets*/}

      <Script strategy="lazyOnLoad">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(${process.env.ANALYTICS_KEY}){dataLayer.push(${process.env.ANALYTICS_KEY});}
        gtag('js', new Date());
    
        gtag('config', '${process.env.ANALYTICS_KEY}');
`}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
