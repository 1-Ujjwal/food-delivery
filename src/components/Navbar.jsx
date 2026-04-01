import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

const Navbar = () => {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);
  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input),
    );
    setCate(newList);
  }, [input]);
  return (
    <div className="flex items-center justify-between w-full h-25 px-5 md:px-8">
      <div className="flex items-center justify-center bg-white w-15 h-15 rounded-md shadow-xl">
        <MdFastfood className="text-green-500 w-7.5 h-7.5" />
      </div>
      <form
        action=""
        className="flex items-center justify-center bg-white w-[45%] h-15 px-5 gap-5 rounded-md shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-green-500 w-5 h-5 rounded-md shadow-xl" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-full outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="flex items-center justify-center bg-white w-15 h-15 rounded-md shadow-xl relative cursor-pointer"
        onClick={() => {
          setShowCart(true);
        }}
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          0
        </span>
        <LuShoppingBag className="text-green-500 w-7.5 h-7.5" />
      </div>
    </div>
  );
};

export default Navbar;
