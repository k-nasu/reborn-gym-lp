import Image from "next/image";

const MenuForStartup = () => {
  return(
    <Image
      src="/images/menuForStartup.jpg"
      alt="rebornトーレーニングメニューの画像"
      width={768}
      height={1425}
      priority
    />
  );
}

export default MenuForStartup;
