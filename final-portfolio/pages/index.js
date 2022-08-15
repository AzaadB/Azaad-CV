//This file will be used as the homepage of the portfolio//
import React from "react"; //imorting react module
import Head from "next/head"; //importing head module from next.
// import styles from "../styles/Home.module.css"; //importing stylesheet//

export default function Home() {
  //exporting a function//
  return (
    /*In the first div below it shows contains the title and the type of page it is of the page
          The second div below displays the headings and paragraphs along with styling*/
    <div>
      <>
        <Head>
          <title>Azaad's Portfolio | Home</title>
          <meta name="keywords" content="portfolio" />
        </Head>

        <div>
          <h1>Welcome to my developer portfolio</h1>

          <p>
            <br></br>If you want to know more about me click the about page.
          </p>

          <p>
            <br></br>If you want to see some of my projects click the projects
            page it will take you to my Github.
          </p>
          <p>
            <br></br>If you want to contact me click the contact page my email
            should be there.
          </p>
        </div>
      </>
    </div>
  );
}
