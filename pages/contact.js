import Head from "next/head"; //importing head module from next//
import styles from "../styles/Home.module.css"; //importing stylesheet//

export default function Contact() {
  //exporting a function//

  return (
    /*In the div below it shows contains the title and the type of page it is of the page,
          along with an h1 tag for Contact details*/
    <>
      <Head>
        <title>Azaad's | Contact</title>
        <meta name="keywords" content="contact" />
      </Head>
      <div>
        <h1 className={styles.title}>Contact Details</h1>

        <p className={styles.text}>
          Here below is my email address if you want to get in touch with me
        </p>
        <p className={styles.text}>
          <a href="azadbeast907@gmail.com" className={styles.text}>azadbeast907@gmail.com</a>
        </p>
      </div>
    </>
  );
}
