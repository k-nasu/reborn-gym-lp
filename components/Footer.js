import Image from "next/image";
import styles from "./layout.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_img}>
        <Image
          src="/images/re.born.png"
          alt="re.born GYMのロゴ"
          width={132}
          height={63}
          priority
        />
      </div>
      <span>©️ re.born 2022</span>
    </footer>
  );
}

export default Footer;
