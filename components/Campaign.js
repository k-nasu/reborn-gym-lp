import Image from 'next/image';
import styles from "./layout.module.css"
import Button from "@material-ui/core/Button"
import { withStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const StyledButton = withStyles({
  root: {
    fontFamily: 'inherit',
    fontSize: 25,
    filter: 'drop-shadow(10px 10px 10px rgba(0,0,0,0.2))',
    color: '#FFFFFF',
    backgroundColor: '#EC6B5F',
    padding: '15px 70px',
    borderRadius: '35px',
    letterSpacing: '0.08rem',
    position: 'absolute',
    bottom: '46%',
    left: '21%',
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
        href="https://page.line.me/rqn6160u"
        endIcon={<ArrowRightIcon style={{transform: 'scale(4, 2.5)'}} />}
      >
        今すぐ!! 体験を申し込む
      </StyledButton>
    </div>
  );
}

export default Campaign;