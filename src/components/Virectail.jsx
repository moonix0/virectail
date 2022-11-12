import React from "react";
import Logo from "@assets/vite.svg";

const Virectail = () => {
  return (
    <>
      <img src={Logo} alt="logo" className="w-32" />
      <a href="https://github.com/moonix0/virectail">
        <h1 className="text-6xl text-slate-50 font-medium hover:text-slate-500">
          Virectail
        </h1>
      </a>
      <h1 className="text-3xl text-slate-50 font-light">
        ViteJS + ReactJS + TailwindCSS
      </h1>
      <p className="text-sm text-slate-200 font-light">&#169;Moonix 2022</p>
    </>
  );
};

export default Virectail;
