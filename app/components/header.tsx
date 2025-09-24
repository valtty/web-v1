import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

const gilroy_r = localFont({
  src: "../../public/fonts/gilroy-regular.ttf",
  weight: "300",
});
const header = () => {
  return (
    <div className="flex items-center justify-between px-[120px] py-[21px]">
      <Image
        src="/Logo.png"
        width={151}
        height={59}
        alt="Picture of the author"
      />
      <ul
        className={`${!gilroy_r.className}justify-between hidden md:flex gap-[56px] text-[#E8EDFF] \
          text-[16px] `}
      >
        <li>О ресторане</li>
        <li>Меню</li>
        <li>Доставка и оплата</li>
        <li>Контакты</li>
      </ul>

      <Image
        src="/basket.png"
        width={36}
        height={36}
        alt="Basket"
      />
    </div>
  );
};
export default header;
