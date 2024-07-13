import Image from 'next/image';
import styles from "./layout.module.css"

const Campaign = () => {
  return (
    <div className={styles.campaign}>
      <Image
        src="/images/campaign.jpg"
        alt="キャンペーン画像"
        width={768}
        height={860}
        priority
      />
        <a
          className={styles.cta_button}
          href="https://line.me/R/ti/p/@878hldgv">今すぐ!! 体験を申し込む ▶︎
        </a>
    </div>
  );
}

export default Campaign;
