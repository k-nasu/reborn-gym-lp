import Image from "next/image";
import styles from "./layout.module.css"
import FaqBody from "./FaqBody"

const Faq = () => {
  return(
    <div className={styles.faq}>
      <Image
        src="/images/faqTop.jpg"
        alt="よくある質問の画像"
        width={768}
        height={250}
      />
      <FaqBody />
    </div>
  );
}

export default Faq;
