import React from "react";
import { Bestproducts } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "../style/custom-swiper.css"; 

const BestSellers = () => {
  return (
    <div className="bg-[#F6F5F3] py-6 px-2 md:py-10">
      <h1 className="ml-2  text-2xl md:text-5xl pb-2 tracking-wide font-semibold">Best Sellers</h1>

      <div className="w-full px-4 relative ">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true} 
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {Bestproducts.map((product, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center pt-4">
              <img
                className="w-[180px] md:w-[300px] mx-auto h-[300px] object-cover rounded-lg hover:-translate-y-4 delay-150 duration-500 "
                src={product.img}
                alt={product.name}
              />
              <p className="text-center text-xl md:text-[18px] font-bold mt-2">{product.name}</p>
              <p className="text-center text-[12px] md:text-[14px] font-semibold">{product.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
