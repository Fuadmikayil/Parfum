import React from "react";
import { products } from "../data/index.js";
const SameSection = () => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <section key={index} className=" items-center w-full relative top-0">
            <section className="relative h-screen  top-0">
              <img
                className="w-full object-cover h-full md:hidden"
                src={product.mimg}
                alt=""
              />
              <div className="hidden  md:flex w-full h-full overflow-hidden">
                <img
                  className="w-full object-cover h-[135vh] hidden md:flex"
                  src={product.img}
                  alt=""
                />
              </div>
              <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent md:hidden"></div>
            </section>
            <section
              className={`flex justify-center p-4 flex-col items-center text-xl md:text-2xl tracking-wider text-center md:absolute bottom-20 ${
                index === 3 ? "md:left-24" : "md:right-24"
              }`}
            >
              <a href="#" className="font-bold">
                {product.name}
              </a>
              <div>
                <a href="#" className="underline">
                  L'EAU D'ISSEY POUR HOMME, EAU DE PARFUM
                </a>
              </div>
            </section>
          </section>
        );
      })}
    </>
  );
};

export default SameSection;
