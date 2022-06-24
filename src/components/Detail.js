import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
import LazyLoad from "react-lazyload";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, name, gifUrl, target, equipment } = exerciseDetail;
  const extraDetails = [
    {
      icon: BodyPartImage,
      name: "bodyPart",
    },
    {
      icon: TargetImage,
      name: "Target",
    },
    {
      icon: EquipmentImage,
      name: "Equipment",
    },
  ];

  return (
    <div className=" md:flex py-6 px-2 sm:px-6 lg:px-8 ">
      <LazyLoad height={200}  once >
        <img
          src={gifUrl}
          alt={name}
          className="rounded-md h-auto md:h-96 pr-0 md:pr-16"
        />
      </LazyLoad>
      <div className="min-w-min">
        <h2 className="text-white text-2xl  md:text-3xl uppercase mt-6 md:mt-0">
          {name}
        </h2>
        <p className="text-light-color text-lg mt-5 w-full md:w-9/12">
          Exercise keep you strong. {name} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </p>
        <div className="flex justify-center md:justify-start items-center space-x-10 pt-20">
          {extraDetails.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div className="bg-white w-20 h-20 rounded-full">
                <img src={item.icon} alt={item.name} className="p-4" />
              </div>
              <span className="text-white pt-3">{item.name}</span>
              <span className="text-white pt-3">{item.equipment}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
