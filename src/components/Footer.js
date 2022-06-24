import React from "react";
import Logo from "../assets/images/logo.webp";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-white dark:bg-secondary-dark  border-t-2 border-light-color  py-16">
     <img src={Logo} alt="logo" />
      <div>
        <p className="py-4 text-sm text-light-color dark:text-gray-300">
          Made With ❤ by <a href="https://www.facebook.com/abdelmjid0/" className="text-main-color" >Abdelmjid</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
