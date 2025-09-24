import Image from "next/image";
import "./globals.css";
import localFont from "next/font/local";

const oceanic = localFont({
  src: "../public/fonts/TRIAL_Oceanic-Regular.otf",
});

const oceanic_m = localFont({
  src: "../public/fonts/TRIAL_Oceanic-Medium.otf",
});

const gilroy_r = localFont({
  src: "../public/fonts/Gilroy-Light.otf",
});

const gilroy_b = localFont({
  src: "../public/fonts/Gilroy-ExtraBold.otf",
});
export default function Home() {
  return (
    <div>
      <div className="absolute display-flex py-[10px] px-[430px] ">
      <Image
        src="/back.svg" 
        alt="background"
        width={5017}
        height={5017}
        className="object-cover -z-10"
      />
      </div>
      
      <div
        className={`${oceanic.className} display-flex py-[102px] grid grid-rows-[20px_1fr_20px] items-center justify-items-center text-lg font-Oceanic_Regular text-[#496192] text-[270px]`}
      >
        <h1>AQUARIM</h1>
      </div>

      <div className="grid grid-cols-3 gap-8 items-start">
        <div className="flex flex-col gap-6 w-full my-[38] mx-[130px]">
          <h2 className={`${oceanic.className} text-[80px] text-[#E8EDFF] `}>
            РЫБНЫЙ
          </h2>
          <p className={`${gilroy_r.className} text-lg text-white text-[18px] w-[370px]`}>
            Откройте для себя мир изысканных вкусов с нашими рыбными деликатесами, приготовленными специально для вас
          </p>
          <button className="px-[109px] py-[20px] bg-[#E9663D] text-white w-[258px] hover:bg-[#3b4f77] transition">
            Меню
          </button>
        </div>

  
        <div className="flex justify-center -mt-60 relative z-10">
          <Image
            src="/shrimp.png"
            alt="shrimp"
            width={220}
            height={590}
            className="rounded-2xl shadow-lg"
          />
        </div>

        

        <div className="flex flex-col gap-4 w-full my-[38] mx-[-80px]">
          <h2 className={`${oceanic.className} text-[80px] text-[#E8EDFF]`}>
            РЕСТОРАН
          </h2>
          <div className="flex justify-center gap-4">
            <img src="/Frame.svg" alt="" />
            <p className={`${gilroy_r.className} text-lg text-white text-[18px] w-[319px] text-right`}>
              Свежая рыба из наших аквариумов <br></br>— гарантированная свежесть
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <img src="/Frame-1.svg" alt="" />
            <p className={`${gilroy_r.className} text-lg text-white text-[18px] w-[319px] text-right`}>
              Качественная доставка, где горячие<br></br> блюда сохраняют свой вкус
            </p>
          </div>
          
        </div>
      </div>
      <div className="flex px-[120px] py-[21px] gap-[120px]">
        <span className={`${gilroy_r.className} text-white text-[12px] py-[25px]`}>О РЕСТОРАНЕ
        </span>   
        <span className={`${oceanic.className} text-white text-[56px] `}>ИСТОРИЯ РЫБНОГО</span>
      </div>
      <span className={`${oceanic.className} text-white text-[56px] `}>ИСКУШЕНИЯ</span>

    </div>
  );
}
