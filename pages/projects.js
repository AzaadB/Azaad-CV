import Head from "next/head"; //importing head module from next//

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
        <h1>Projects</h1>
        <p>Below are the projects that I have completed.</p>
        <p>
          <a href="https://github.com/AzaadB/gitTask.git">BT Games Beta</a>
          <br></br>
          <br></br>For the BT Games Beta just click the link it should take you
          to my github respository called gitTask once there click the green
          button that says code and click download zip onece it has been
          downloaded extract the files on to your local machine and open the
          HTML file.
        </p>
        <p>
          <a href="https://ultimate-quiz.herokuapp.com/">Quiz</a>
          <br></br>
          <br></br>For The Quiz you just have to click the link and it should to
          the game's webpage and once you are there you can start playing.
        </p>
        <p>
          <a href="https://github.com/AzaadB/Ultimate-Quiz">Quiz-code</a>
        </p>
        <br></br>
        <p>
          If you want to see the code for the quiz game, then<br></br>
          <br></br>
          1.) Download it from Github with this link:
          https://github.com/AzaadB/Ultimate-Quiz.<br></br>
          <br></br>
          2.) Once it has been downloaded as a zip, then extract the files from
          the zip file and save it on to your local machine.
          <br></br>
          <br></br>
          3.) install node modules by typing npm install.
          <br></br>
          <br></br>
          4.) Once node modules has installed run it by typing npm start, it
          will then open in your browser.
          <br></br>
          <br></br>
          5.) Once it has opened in your browser you can start using it.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
        <a href="https://github.com/AzaadB/Itunes-Search-api.git">
          Itunes-Search
        </a>
        <br></br>
        <br></br>
        <p>
          For the itunes-search-api: <br></br>
          <br></br>
          1.) Download it from Github with this link:
          https://github.com/AzaadB/Itunes-Search-api.git,
          <br></br>
          <br></br>
          2.) Then extract the files from the zip file and save it on to your
          local machine,
          <br></br>
          <br></br>
          3.) install node modules by typing npm install on both sides.
          <br></br>
          <br></br>
          4.) To test the app you can type npm test.
          <br></br>
          <br></br>
          5.) Once node modules has installed run it by typing npm start, it
          will then open in your browser. 
          <br></br>
          <br></br>
          6.) Once it has opened in your browser you can start using it.
        </p>
        <br></br>
      </div>
    </>
  );
}
