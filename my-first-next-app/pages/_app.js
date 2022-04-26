//This file is the root for all the page components which are rendered here//
import Layout from "../components/Layout";
import "../styles/profile.css";


export default function App({ Component, pageProps }) {
  //exporting a function//
  return (
    //In the return there is an intance of the layout page being made//
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
