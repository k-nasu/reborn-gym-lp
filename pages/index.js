import Layout from "../components/Layout";
import KeyVisual from "../components/KeyVisual";
// import Campaign from "../components/Campaign";
import ConceptTop from "../components/ConceptTop"
import ConceptContent from "../components/ConceptContent"
import FlowTop from "../components/FlowTop"
import FlowContent from "../components/FlowContent"
import Trainer from "../components/Trainer";
import MenuForReborn from "../components/MenuForReborn";
import MenuForStartup from "../components/MenuForStartup";
import Competitor from "../components/Competitor";
import Review from "../components/Review";
import Faq from "../components/Faq";

export default function Home() {
  return <Layout>
    <KeyVisual />
    {/* <Campaign /> */}
    <ConceptTop />
    <ConceptContent />
    <FlowTop />
    <FlowContent />
    <Trainer />
    <MenuForReborn />
    <MenuForStartup />
    {/* <Campaign /> */}
    <Competitor />
    <Review />
    <Faq />
  </Layout>
}
