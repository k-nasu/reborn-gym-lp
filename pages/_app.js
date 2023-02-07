import '../styles/globals.css'
import Head from "next/head";
import { DefaultSeo } from 'next-seo';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>re.born GYM</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* Google Tag Manager */}
    <Script id="google-analytics">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MLHX4NP');
      `}
    </Script>
    {/* End Google Tag Manager */}
    <DefaultSeo
      defaultTitle="リボーンジム恵比寿・代官山 | re.born GYM【美容整体×パーソナルトレーニングジム】"
      description="恵比寿駅から徒歩8分、代官山駅から徒歩5分のリボーンジム（re.born GYM）。初心者・女性の方の満足度・継続率No.1 美容整体サロンと併設している業界唯一のパーソナルトレーニングジム。リボーンジムでは痛みの軽減、美しい体づくりをサポートしていきます。"
      openGraph={{
        type: "website",
        title: "リボーンジム恵比寿・代官山 | re.born GYM【美容整体×パーソナルトレーニングジム】",
        description: "恵比寿駅から徒歩8分、代官山駅から徒歩5分のリボーンジム（re.born GYM）。初心者・女性の方の満足度・継続率No.1 美容整体サロンと併設している業界唯一のパーソナルトレーニングジム。リボーンジムでは痛みの軽減、美しい体づくりをサポートしていきます。",
        site_name: "リボーンジム恵比寿・代官山 | re.born GYM【美容整体×パーソナルトレーニングジム】",
        url: "https://reborn-gym.com",
        images: [
          {
            url: "../public/images/keyVisual.jpg",
            width: 768,
            height: 783,
            alt: 're.born GYMの画像',
            type: 'image/jpg',
          },
        ],
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
