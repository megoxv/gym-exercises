import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollbar } from "./";
const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercises = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercises();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <div className="bg-main-dark py-20">
      <h2 className="text-white text-2xl md:text-3xl font-semibold uppercase text-center">
        Awesome Exercises You Should Know
      </h2>
      <div className="flex flex-col items-center p-20 pt-16">
        <input
          type="text"
          dir="auto"
          className=" w-64 md:w-96 p-2 px-5 text-white rounded-full bg-secondary-dark outline-none border-2 border-white focus:border-main-color duration-300"
          placeholder="Search for an exercise"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          onClick={handleSearch}
          className="bg-main-color text-white hover:text-main-dark  font-normal   duration-300 mt-5 py-2 px-4 rounded-full"
        >
          Search
        </button>
      </div>
      <div className="w-full p-5">
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </div>
    </div>
  );
};

export default SearchExercise;
