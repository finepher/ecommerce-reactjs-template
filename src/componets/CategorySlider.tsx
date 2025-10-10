import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Heading from "./Heading";
import Image from "./Image";

export default function CategorySlider() {
  type sliderType = {
    id: number;
    name: string;
    /**
     * this is image for the category
     */
    image: string;
    count: string;
    color?: string;
  };

  const sliders: sliderType[] = [
    {
      id: 1,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
      color: "#FEEFEA",
    },
    {
      id: 2,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
      color: "#FFF3FF",
    },
    {
      id: 3,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
      color: "#F2FCE4",
    },
    {
      id: 4,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
    },
    {
      id: 5,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
    },
    {
      id: 6,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
    },
    {
      id: 7,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
    },
    {
      id: 8,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
    },
    {
      id: 9,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
    },
    {
      id: 10,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
    },
    {
      id: 10,
      name: "Peach",
      image:
        "https://res.cloudinary.com/finegrocery/image/upload/v1760067695/samples/grocery/image_3_km9pmu.png",
      count: "20 Items",
      color: "#FEEFEA",
    },
  ];

  return (
    <div className="container mx-auto ">
      <Heading>Explore Categories</Heading>
      <Swiper
        spaceBetween={12}
        slidesPerView={2}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 22,
          },
        }}
      >
        {sliders &&
          sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div
                style={{ backgroundColor: slider.color || "#FEEFEA" }}
                className=" text-center p-4 rounded-[3px]"
              >
                <Image
                  src={slider.image}
                  alt={slider.name}
                  className={"w-[100px] h-[100px] object-cover mx-auto mb-3"}
                />
                <div className="text-lg font-semibold text-theme-black ">
                  {slider.name}
                </div>
                <div className="text-sm text-theme-gray">{slider.count}</div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
