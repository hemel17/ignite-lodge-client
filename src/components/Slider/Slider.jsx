import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Autoplay]}
      className="h-64 md:h-96"
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfjkbffbs/image/upload/v1723053378/ignite%20lodge/tzatuu12zospkv5xawxg.jpg"
          alt=""
          className="object-cover w-full h-full "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfjkbffbs/image/upload/v1723053378/ignite%20lodge/vtth4wilklhx7eentip7.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfjkbffbs/image/upload/v1723053378/ignite%20lodge/fucoxega3pcpx71l6kag.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfjkbffbs/image/upload/v1723053378/ignite%20lodge/bqhrdnjn1p2skmkutd9w.jpg"
          alt=""
          className="object-cover w-full h-full "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/dfjkbffbs/image/upload/v1723053378/ignite%20lodge/kk9koslsrc5sdohlapgl.jpg"
          alt=""
          className="object-cover w-full h-full "
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
