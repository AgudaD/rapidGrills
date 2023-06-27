import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/swiper-bundle.min.css";

const Restaurants = () => {
  return (
    <div className="mt-6">
      <h1 className="font-semibold">Your restaurants</h1>
      <Swiper
        modules={{ Scrollbar }}
        spaceBetween={30}
        slidesPerView={1.2}
        breakpoints={{
          320:{
            width: 320, 
            slidesPerView: 1,
          },
          640:{
            width: 640,
            slidesPerView: 2.2,
            spaceBetween: 50,
          },
          720:{
            width: 720,
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        scrollbar={{draggable: true}}
        onslideChange={() => console.log(`slide change`)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative h-32 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12 md:h-60">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-32 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12 md:h-60">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-32 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12 md:h-60">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-32 rounded-lg bg-pizza bg-cover bg-no-repeat px-5 py-12 md:h-60">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-32 rounded-lg bg-pizza bg-cover bg-no-repeat px-5 py-12 md:h-60">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-32 rounded-lg bg-pizza bg-cover bg-no-repeat px-5 py-12 md:h-60">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="mt-4">
        <div>
          <p>Subway - Lahore</p>
          <p>Fast Food,American,Meat,Halal</p>
          <p>$30 delivery fee</p>
        </div>
      </div> */}
    </div>
  );
};

export default Restaurants;
