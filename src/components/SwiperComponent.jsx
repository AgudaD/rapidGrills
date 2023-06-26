import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
register();

const SwiperComponent = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return(
    <div className="p-12">
        <swiper-container
          ref={swiperElRef}
          space-between="10"
          slides-per-view="3"
        >
          <swiper-slide>
          <div className="relative h-40 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div className="relative h-40 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div className="relative h-40 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div className="relative h-40 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
          </swiper-slide>
          <swiper-slide>
          <div className="relative h-40 rounded-lg bg-hotdog bg-cover bg-no-repeat px-5 py-12">
            <p className="absolute left-0 top-5 rounded-r-md bg-pink-500 px-2 py-1 text-white">
              fast food deals
            </p>
            <p className="absolute bottom-2 left-3 rounded-full bg-gray-100 p-1 text-xs">
              30 mins
            </p>
          </div>
          </swiper-slide>
        </swiper-container>
    </div>
);
};

export default SwiperComponent;
