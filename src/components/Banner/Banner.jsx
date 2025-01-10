import { RiAiGenerate2 } from 'react-icons/ri';
import banner1 from '../../assets/image/la.png';
import banner2 from '../../assets/image/co.png';
import TypeIt from "typeit-react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Banner = () => {
  return (
    <div className="relative w-full h-[350px] md:h-screen lg:h-screen">
      {/* Swiper Background Slider */}
      <Swiper
        modules={[Autoplay]} // Add Autoplay module
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Enable Autoplay
        loop={true} // Infinite loop
        className="absolute inset-0 z-0 w-full h-full"
      >
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>

      {/* Content */}
      <div className="absolute inset-0 flex mt-20 pb-14  lg:mt-5 lg:pb-0 flex-col justify-center items-start px-4 lg:px-8 z-10 text-white">
        <p className="text-xs lg:text-base font-semibold uppercase mb-3 text-[#d12dff]">
          Next-generation of AI Images
        </p>
        <h1 className="text-3xl md:text-6xl lg:text-7xl max-w-[800px] font-extrabold">
          <span className="text-[#e1d0ff]">Unleash</span> Your{" "}
          <span className="text-[#a600ff]">Imagination</span> <br />
          <span className="mr-2">with</span>
          <TypeIt
            className="bg-gradient-to-r from-[#703192] via-[#ee34ff] to-[#190438] bg-clip-text text-transparent py-1 px-4 rounded-full animate-gradient-signal bg-[length:200%_200%] capitalize pb-1 sm:leading-0 leading-6"
            options={{
              loop: true,
              cursor: true,
              cursorChar: "|",
            }}
            getBeforeInit={(instance) => {
              instance
                .type("Mars AI")
                .pause(1000)
                .delete()
                .type("Dall-E 2")
                .pause(1000)
                .delete()
                .type("Midjourney")
                .pause(1000)
                .delete()
                .type("NightCafe")
                .pause(1000)
                .delete()
                .type("Craiyon");
              return instance;
            }}
          />
        </h1>

        <p className="mt-2 text-gray-200 pb-5 text-[13px] md:text-lg max-w-md">
          Cost-effective solution to generate powerful AI photos and art
          generation. What will you create?
        </p>
        <Link to={'/generate-image'}>
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#703192e2] via-[#ee34ff] to-[#190438] text-white py-2 px-6 rounded-md animate-gradient-signal bg-[length:200%_200%]">
            <RiAiGenerate2 /> Generate Image
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
