import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import { ExercisesCard, Loader } from "./";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(20);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1475, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div
      id="exercises"
      className="bg-secondary-dark py-20  px-2 sm:px-6 lg:px-8"
    >
      <h2 className="text-white text-2xl md:text-3xl font-semibold uppercase text-center">
        Showing {exercises.length} exercises
      </h2>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-20">
        {currentExercises?.map((exercises, index) => (
          <ExercisesCard key={index} exercises={exercises} />
        ))}
      </div>
      <div className="flex justify-center mt-28  text-white">
        {exercises.length > 20 && (
          <Pagination
            className="text-white"
            color="customRibRed"
            variant="outlined"
            showFirstButton
            showLastButton
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default Exercises;

// {exercises.map((exercises, index) => (
//   <ExercisesCard key={index} exercises={exercises} />
// ))}
