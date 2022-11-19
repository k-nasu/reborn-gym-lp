import Image from 'next/image';
import styles from "./layout.module.css"
import Button from "@material-ui/core/Button"
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
  root: {
    fontFamily: 'inherit',
    fontSize: 30,
    filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.2))',
    color: '#FFFFFF',
    backgroundColor: '#EC6B5F',
    padding: '25px 90px',
    borderRadius: '50px',
    letterSpacing: '0.08rem',
    position: 'absolute',
    bottom: '43%',
    left: '14.4%',
    '&:hover': {
      backgroundColor: '#EC6B5F',
    },
  }
})(Button)

const Campaign = () => {
  return (
    <div className={styles.campaign}>
      <Image
        src="/images/campaign.jpg"
        alt="キャンペーン画像"
        width={768}
        height={643}
      />
      <StyledButton
        href="https://line.me/R/ti/p/@878hldgv"
      >
        今すぐ!! 体験を申し込む ▶︎
      </StyledButton>
    </div>
  );
}

export default Campaign;