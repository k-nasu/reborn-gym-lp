import Image from "next/image";
import styles from "./layout.module.css"

const FaqTop = () => {
  return(
    <Image
      src="/images/faqTop.jpg"
      alt="よくある質問の画像"
      width={768}
      height={250}
      className={styles.faq_top}
    />
  );
}

export default FaqTop;
