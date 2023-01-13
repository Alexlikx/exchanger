import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import basket from "./assets/basket.svg";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`${styles.boxWidth} flex py-6 justify-between items-center navbar m-auto px-5`}
    >
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-[40px] text-white font-bold">
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] `}
          onClick={() => setActive(nav.title)}
        >
          <a href={`/`}>Home</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] `}
          onClick={() => setActive(nav.title)}
        >
          <a href={`/#exchange`}>Exchange</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] `}
          onClick={() => setActive(nav.title)}
        >
          <Link to={`/rules`}>Rules</Link>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] `}
          onClick={() => setActive(nav.title)}
        >
          <a href={`/#product`}>Product</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] `}
          onClick={() => setActive(nav.title)}
        >
          <a href={`/#clients`}>Clients</a>
        </li>
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px]`}
          onClick={() => setActive(nav.title)}
        >
          <Link to={`/orders`} className="flex">
            <img src={basket} alt="" className="mr-[8px]"></img>Basket
          </Link>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col text-white">
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] p-[10px]`}
              onClick={() => setToggle(!toggle)}
            >
              <a href={`/`}>Home</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] p-[10px]`}
              onClick={() => setToggle(!toggle)}
            >
              <a href={`/#exchange`}>Exchange</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] p-[10px]`}
              onClick={() => setToggle(!toggle)}
            >
              <Link to={`/rules`}>Rules</Link>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] p-[10px]`}
              onClick={() => setToggle(!toggle)}
            >
              <a href={`/#product`}>Product</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] p-[10px]`}
              onClick={() => setToggle(!toggle)}
            >
              <a href={`/#clients`}>Clients</a>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] pt-[10px]`}
              onClick={() => setToggle(!toggle)}
            >
              <Link to={`/orders`} className="flex">
                <img src={basket} alt="" className="mr-[8px]"></img>Basket
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
