import Head from "next/head";
import Footer from "./Footer";
import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>re.bornGYM</title>
        <meta name="description" content="美容整体サロンと併設している業界唯一のパーソナルトレーニングジム" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;