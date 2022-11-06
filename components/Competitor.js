import Image from "next/image";

const Competitor = () => {
  return(
    <Image
      src="/images/competitor.jpg"
      alt="他社比較の画像"
      width={768}
      height={1728}
    />
  );
}

export default Competitor;
