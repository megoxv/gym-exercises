import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    //
    <div
      className={`${
        bodyPart === item ? " border-4 border-main-color" : ""
      } flex flex-col items-center justify-center bg-secondary-dark w-64 h-64 rounded-full shadow-md cursor-pointer gap-10  hover:text-xl duration-200`}
      onClick={() => {
        setBodyPart(item);
      }}
    >
      <img src={Icon} alt="Icon" className="w-10 h-10 " />
      <span className="text-white font-medium  ">{item}</span>
    </div>
  );
};

export default BodyPart;
