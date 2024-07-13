import Image from "next/image";

const Review = () => {
  return(
    <Image
      src="/images/review.jpg"
      alt="お客様の声の画像"
      width={768}
      height={1345}
      priority
    />
  );
}

export default Review;
