import styles from "./layout.module.css"
import { withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledAccordionSummary = withStyles({
  root: {
    position: 'relative',
    fontSize: '1.7rem',
    backgroundColor: '#E6E6E6',
    margin: 0,
    padding: '25px 39px'
  }
})(AccordionSummary);

const StyledSummaryTypography = withStyles({
  root: {
    fontFamily: 'inherit',
    fontSize: '1.7rem',
    fontWeight: 600,
    letterSpacing: 0
  }
})(Typography);

const StyledAccordionDetails = withStyles({
  root: {
    margin: 0,
    padding: '39px 10px 100px 35px',
  }
})(AccordionDetails);

const StyledDetailTypography = withStyles({
  root: {
    fontSize: '1.55rem',
    lineHeight: '2.7rem',
    letterSpacing: 0
  }
})(Typography);

const FaqBody = () => {
  return(
    <ul className={styles.faq}>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{transform: 'scale(2)'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <StyledSummaryTypography>
            re.born GYM はどんなジムですか？
          </StyledSummaryTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledDetailTypography>
            【美容と健康のトータルメンテナンス】<br/>
            をコンセプトとし、プロフェッショナルな<br/>
            トレーナー陣が最高品質のトレーニングを<br/>
            完全ワンツーマンで提供します。
          </StyledDetailTypography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{transform: 'scale(2)'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <StyledSummaryTypography>
            普通のジムで一人でやるトレーニングとは何が違うのですか？
          </StyledSummaryTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledDetailTypography>
            1人で行うトレーニングでは、<br/>
            どのようなメニューをどのくらいやれば良いか、<br/>
            モチベーションが続かず運動習慣が定着しない<br/>
            など、どうしても効果が出にくい部分があります。<br/><br/>
            re.born GYM が提供する<br/>
            パーソナルトレーニングでは、お客様のニーズに<br/>
            合わせトレーナーがマンツーマンで指導します。<br/><br/>
            まず、継続的にカウンセリングを行い、<br/>
            お客様のご希望を叶えるプランを設定した上で、<br/>
            毎回のトレーニングでは、メニューに<br/>
            集中できるよう対面でサポートいたします。<br/><br/>
            二人三脚で進めていくので、<br/>
            運動習慣が定着するまでモチベーションを<br/>
            落とさず継続できることも特徴です。
          </StyledDetailTypography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{transform: 'scale(2)'}} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <StyledSummaryTypography>
            何年も運動していない、<br/>
            運動経験がないのですが大丈夫ですか？
          </StyledSummaryTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledDetailTypography>
            <span style={{color: '#EC6B5F'}}>運動習慣のない方</span>でも、プロフェッショナルな<br/>
            トレーナーがマンツーマンで<br/>
            丁寧に指導しますので、<span style={{color: '#EC6B5F'}}>全く問題ございません。</span><br/><br/>
            ハードに体を変えていくトレーニングではなく、<br/>
            お客様の多くが運動習慣の定着を第一に<br/>
            お越しいただいております。<br/><br/>
            トレーニングでは、適切なアプローチで行えば、<br/>
            効果が出るだけでなく<br/>
            リフレッシュ効果も大きいものです。<br/><br/>
            効果が出るだけでなく、運動を楽しむ道のりを<br/>
            ご一緒させていただければ幸いです。
          </StyledDetailTypography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{transform: 'scale(2)'}} />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <StyledSummaryTypography>
            身体に怪我や痛み、持病(生活習慣病など)があるけど大丈夫ですか？
          </StyledSummaryTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledDetailTypography>
            カウンセリング時にお身体の状態も<br/>
            把握した上で、お客様に合った<br/>
            トレーニング内容をご提案いたします。<br/><br/>
            心配な点につきましては、体験の際に<br/>
            トレーナーまでお伝えいただけますと幸いです。<br/><br/>
            なお、病院で治療を行っている場合は、<br/>
            どの程度運動しても大丈夫か、担当のお医者様に<br/>
            ご確認いただいた方がよろしいかと存じます。
          </StyledDetailTypography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{transform: 'scale(2)'}} />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <StyledSummaryTypography>
            トレーニングを行うことで<br/>
            どのような効果が出ますか？
          </StyledSummaryTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledDetailTypography>
            <span style={{color: '#EC6B5F'}}>ダイエット / ボディメイク フォーマンスアップ</span><br/>
            <span style={{color: '#EC6B5F'}}>体型維持 / 姿勢改善 / 健康増進</span><br/>
            などお客様のご希望する目的や目標に<br/>
            合わせた結果が出るように<br/>
            サポートさせていただきます。
          </StyledDetailTypography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{transform: 'scale(2)'}} />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <StyledSummaryTypography>
            厳しい食事制限はありますか？
          </StyledSummaryTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledDetailTypography>
            過度な食事制限は指導しておりません。<br/><br/>
            もちろん、ご希望のお客様には食事内容の<br/>
            アドバイスは行っておりますが、日々の健康や<br/>
            お仕事のパフォーマンスを損なうような<br/>
            やり方は行いません。<br/><br/>
            効果を出すための適切なアプローチを把握した<br/>
            トレーナー陣が、お客様に合わせた<br/>
            ご提案をさせていただきます。
          </StyledDetailTypography>
        </StyledAccordionDetails>
      </Accordion>
      <Accordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon style={{transform: 'scale(2)'}} />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <StyledSummaryTypography>
            年齢や性別は関係ありますか？
          </StyledSummaryTypography>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <StyledDetailTypography>
            お客様にあったトレーニング内容を<br/>
            個別に指導いたしますので、<br/>
            <span style={{color: '#EC6B5F'}}>年齢・性別は関係なく</span>通っていただけます。<br/><br/>
            現在も、<span style={{color: '#EC6B5F'}}>女性男性問わず</span>、様々な年代のお客様に<br/>
            ご利用いただいております。
          </StyledDetailTypography>
        </StyledAccordionDetails>
      </Accordion>
    </ul>
  );
}

export default FaqBody;
