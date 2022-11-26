import { useEffect } from "react"
import styles from "../components/layout.module.css"
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
    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MLHX4NP"
        style={{ width: 0, height: 0, display: 'none', visibility: 'hidden'}}
      />
    </noscript>
    {/* <!-- End Google Tag Manager (noscript) --> */}
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
