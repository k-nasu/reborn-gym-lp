import Image from "next/image";

const ConceptTop = () => {
  return (
    <Image
      src="/images/conceptTop.jpg"
      alt="リボーンジムのコンセプト"
      width={768}
      height={838}
      priority
    />
  );
}

export default ConceptTop;
