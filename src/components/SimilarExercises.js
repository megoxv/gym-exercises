import React from 'react'
import {ExercisesCard, HorizontalScrollbar ,Loader} from "./"
const SimilarExercises = ({targetMuscleExercises, eqipmentExercises}) => {
  return (
    <div className="bg-secondary-dark mt-12 py-20 px-2 sm:px-6 lg:px-8">
      <div>
      <p className="text-white text-3xl font-semibold uppercase text-center mb-10" >exercises that target the same muscle group</p>
      <div>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader /> }
      </div>
      </div>
    </div>
  )
}

export default SimilarExercises