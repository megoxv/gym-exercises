import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { BodyPart, ExercisesCard } from "./";
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <Swiper
      breakpoints={{
        // min width 100px
        100: {
          slidesPerView: 1,
        },
        // min width 500px
        500: {
          slidesPerView: 2,
        },
        // min width 700px
        700: {
          slidesPerView: 4,
        },
        // min width 1000px
        1000: {
          slidesPerView: 5,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      loop={true}
      spaceBetween={200}
      modules={[Autoplay]}
      className="mySwiper text-white "
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id || item}
          itemID={item.id || item}
          title={item.name}
          className="mx-10 w-full"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExercisesCard exercises={item} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollbar;
