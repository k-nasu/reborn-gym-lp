import Image from "next/image";

const Trainer = () => {
  return(
    <Image
      src="/images/trainer.jpg"
      alt="トレーナーの画像"
      width={768}
      height={745}
      priority
    />
  );
}

export default Trainer;
