import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full">
        <InfinitySpin className="text-main-color" />
    </div>
  )
}

export default Loader