import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = () => {
  return (
    <header className="px-4 py-5 flex justify-between items-start  z-50 top-0 fixed w-full bg-transparent">
      <IoSearch className="size-6" />
      <div className="w-[248px] h-[248px] bg-white  absolute left-[50%] top-[50%]  -translate-x-[50%] mx-auto -translate-y-[89%]    rounded-full ">
        <a
          href="https://www.isseymiyakeparfums.com/en"
          className="absolute left-[50%]  -translate-x-[50%] bottom-4 "
          title="Home"
        >
          <span className="prata-regular text-[12px]  uppercase ">
            Issey Miyake
          </span>
          <p className="prata-regular text-[6px]  text-center uppercase ">
            Parfums
          </p>
        </a>
      </div>
      <HiOutlineMenuAlt4 className="size-6"  />
    </header>
  );
};

export default Header;
