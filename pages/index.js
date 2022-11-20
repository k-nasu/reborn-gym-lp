import { useEffect } from "react"
import styles from "../components/layout.module.css"
import Head from "next/head";
import Footer from "../components/Footer";
import KeyVisual from "../components/KeyVisual";
import Campaign from "../components/Campaign";
import ConceptTop from "../components/ConceptTop"
import ConceptContent from "../components/ConceptContent"
import FlowTop from "../components/FlowTop"
import FlowContent from "../components/FlowContent"
import Trainer from "../components/Trainer";
import MenuForReborn from "../components/MenuForReborn";
import MenuForStartup from "../components/MenuForStartup";
import Competitor from "../components/Competitor";
import Review from "../components/Review";
import FaqTop from "../components/FaqTop";
import FaqBody from "../components/FaqBody";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <>
    <Head>
      <title>re.bornGYM</title>
      <meta name="description" content="美容整体サロンと併設している業界唯一のパーソナルトレーニングジム" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
      <KeyVisual />
      <Campaign />
      <ConceptTop />
      <ConceptContent />
      <FlowTop />
      <FlowContent />
      <Trainer />
      <MenuForReborn />
      <MenuForStartup />
      <Campaign />
      <Competitor />
      <Review />
      <FaqTop />
      <FaqBody />
      <Footer />
    </div>
  </>
}
