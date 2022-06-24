import React from "react";
const ExercisesVideos = ({ exerciseVideos, name }) => {
  // if (!exerciseVideos.length) return "loading...";

  return (
    <div className="py-20 px-2 sm:px-6 lg:px-8">
      <h2 className="text-white text-2xl md:text-3xl font-semibold uppercase text-center">
        Watch <span>{name}</span> exercise videos
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 ">
        {exerciseVideos?.slice(0, 4).map((item, index) => (
          <div className="mx-6 w-80 md:h-44 mt-6 shadow-md">
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                className=""
              />
              <div>
                <h3 className="text-white mt-3">{item.video.title}</h3>
                <span className="text-light-color text-sm">
                  {item.video.channelName}
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisesVideos;
