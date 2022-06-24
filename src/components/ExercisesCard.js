import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const ExercisesCard = ({ exercises }) => {
  return (
    <LazyLoad height={200} offset={200} once scroll>
      <div className="bg-main-dark  w-80 h-96 rounded-b-lg mt-5 shadow-md hover:shadow-2xl hover:-translate-y-4 duration-300">
        <Link to={`/exercises/${exercises.id}`}>
          <img
            src={exercises.gifUrl}
            alt={exercises.name}
            className="rounded-t-lg w-full h-64"
          />
          <div className="pt-4 pb-6  px-8">
            <button className="text-main-color text-md mr-3 bg-secondary-dark px-4 py-1.5 rounded-full">
              {exercises.bodyPart}
            </button>
            <button className="text-main-color text-md mr-4 bg-secondary-dark px-4 py-1.5 rounded-full">
              {exercises.target}
            </button>
            <h3 className="text-white text-2xl pt-2 truncate hover:clip" title={exercises.name} >{exercises.name}</h3>
          </div>
        </Link>
      </div>
    </LazyLoad>
  );
};

export default ExercisesCard;
