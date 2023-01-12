import React from "react";

const Button = ({ styles }) => (
  <a
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    href="#exchange"
  >
    Get Started
  </a>
);

export default Button;
