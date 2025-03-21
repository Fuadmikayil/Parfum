import React from "react";
import HiroImg1 from "../assets/issey-miyake-edp-edpi-hp-d.jpg";
import HiroMImg1 from "../assets/issey-miyake-edp-edpi-hp-m.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t, i18n } = useTranslation();
  return (
    <>
      <section className=" items-center w-full relative top-0">
        <section className="relative h-screen  top-0">
          <img className="w-full object-cover h-full md:hidden" src={HiroMImg1} alt="" />
          <div className="hidden  md:flex w-full h-full overflow-hidden">
            <img
              className="w-full object-cover h-[135vh] hidden md:flex"
              src={HiroImg1}    
              alt=""
            />
          </div>
          <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent md:hidden"></div>
        </section>
        <section className="flex justify-center p-4 flex-col items-center text-xl text-center md:absolute right-24 bottom-20">
          <a href="#" className="font-bold uppercase">
            {t("hirotext")}
          </a>
          <div>
            <a href="#" className="underline">
              L'EAU D'ISSEY, EAU DE PARFUM INTENSE
            </a>{" "}
            <br />
            & <br />
            <a href="#" className="underline">
              L'EAU D'ISSEY POUR HOMME, EAU DE PARFUM
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
