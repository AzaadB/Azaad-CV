import Head from "next/head"; //importing head module from next//
import styles from "../styles/Home.module.css"; //importing stylesheet//

export default function Projects() {
  //exporting a function//

  return (
    /*In the div below it shows contains the title and the type of page it is of the page,
        along with links to my projects on github*/
    <>
      <Head>
        <title>Azaad's | Projects</title>
        <meta name="keywords" content="projects" />
      </Head>
      <div>
        <h1 className={styles.title}>Projects</h1>
        <p>
          below is the projects that I have completed if you want to see how it
          works click one of them it should take you to my Github and download
          it and follow the README file for the Quiz and Itunes-Search.
        </p>
        <p>
          For the BT Games Beta just extract the files and open the HTML file.
        </p>
        <p>
          <a href="https://github.com/AzaadB/gitTask.git">BT Games Beta</a>
        </p>
        <p>
          <a href="https://github.com/AzaadB/quiz.git">Quiz</a>
        </p>
        <a href="https://github.com/AzaadB/Itunes-Search-api.git">
          Itunes-Search
        </a>
      </div>
    </>
  );
}
