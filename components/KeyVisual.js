import Image from "next/image";

const KeyVisual = () => {
  return (
    <header>
      <Image
        src="/images/keyVisual.jpg"
        alt="キービジュアル画像"
        width={768}
        height={783}
      />
    </header>
  );
}

export default KeyVisual;