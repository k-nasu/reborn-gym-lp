import Image from "next/image";
import styles from "./layout.module.css"

const FlowContent = () => {
  return (
    <div className={styles.flow_wrapper}>
      <div className={styles.flow} />
      <ul>
        <li className={styles.flow_content_first}>
          <Image
            src="/images/flowFirst.png"
            alt="トレーニングの流れの画像1"
            width={736}
            height={1208}
            priority
          />
        </li>
        <li className={styles.flow_content_second}>
          <Image
            src="/images/flowSecond.png"
            alt="トレーニングの流れの画像2"
            width={746}
            height={1197}
            priority
          />
        </li>
        <li className={styles.flow_content_third}>
          <Image
            src="/images/flowThird.png"
            alt="トレーニングの流れの画像3"
            width={730}
            height={1170}
            priority
          />
        </li>
      </ul>

    </div>
  );
}

export default FlowContent;
