import Head from "next/head"; //importing head module from next//
import styles from "../styles/Home.module.css"; //importing stylesheet//

export default function About() {
  //exporting a function//

  return (
    /*In the div below it shows contains the title and the type of page it is of the page
          along with subsections i.e About, Educational History, Work History, ect.*/
    <>
      <Head>
        <title>Azaad's | About</title>
        <meta name="keywords" content="about" />
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          I love watching and playing sports like ie. soccer, Rugby, Hockey,ect.
        </p>
        <p className={styles.text}>I am always up for a challenge!</p>
        <p className={styles.text}>
          When I was in primary I played Rugby, Hockey and Cricket for my
          school.
        </p>
        <p className={styles.text}>
          I am very determined, once I have started something I am determined to
          finish it no matter how long it takes.
        </p>
        <p className={styles.text}>
          <br></br>2019 and 2020 were 2 interesting years for me.<br></br>
        </p>
        <p className={styles.text}>
          In June and September of 2019 I had a total of 2 seizers in each of
          those months and no-one knew what was the cause.
        </p>
        <p className={styles.text}>
          2020 was my matric year and had another 2 seziers that year and one of
          them was in class due to extreme cold.
        </p>
        <p className={styles.text}>In 2021 I've only had one sezier.</p>
        ---------------------------------------------------------------------------------------------------------------------------------
        <h1>Educational History</h1>
        <p>
          I started school late, I was held back a year, due to my low marks in
          maths which wasn't my strongest subject.
        </p>
        <p>
          I recently made it through my matric year and got my NSC at the
          begining of 2021.
        </p>
        ---------------------------------------------------------------------------------------------------------------------------------
        <h1>What I'm Passionate about?</h1>
        <p>
          I am passionate about being a great web developer and earning money.
        </p>
        ---------------------------------------------------------------------------------------------------------------------------------
        <h1>Work History</h1>
        <p>I haven't worked before</p>
      </div>
    </>
  );
}