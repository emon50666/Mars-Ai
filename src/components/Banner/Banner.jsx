import { RiAiGenerate2 } from 'react-icons/ri';
import banner from '../../assets/image/la.png';
import TypeIt from "typeit-react";


const Banner = () => {
  return (
    <div
      className="    w-full md:h-screen  lg:h-screen bg-top lg:bg-right  bg-cover  text-start flex items-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      {/* <div className='absolute inset-0 bg-black z-10 opacity-30'>

      </div> */}

      {/* Content */}
      <div className="mt-20 mb-16 md:mt-12 md:mb-12 md:pt-10  lg:pt-8 text-start px-2 lg:px-8 ">
        <div className="w-full    text-start text-black">
          <p className="text-sm font-semibold uppercase mb-3  justify-start   text-[#d12dff]">
            Next-generation of AI Images
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl text-start max-w-[800px]  font-extrabold text-[#edc5ff] ">
            <span  className='text-[#e3e3e3cf] '>Unleash</span> Your <span className='text-[#a600ff] '>Imagination</span> <br />
            <span className="mr-2">with</span>
            <TypeIt
            className='bg-gradient-to-r from-[#703192] via-[#ee34ff] to-[#190438] bg-clip-text text-transparent py-1 px-4 rounded-full animate-gradient-signal bg-[length:200%_200%] capitalize pb-1 sm:leading-0 leading-6'
              options={{
                loop: true,
                cursor: true, // Ensure the cursor is enabled
                cursorChar: "|", // Define the cursor character
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


          <p className="mt-2 text-gray-400 pb-5 text-[13px] md:text-lg max-w-md ">
            Cost-effective solution to generate powerful AI photos and art generation. What will you create?
          </p>


        </div>
        <div className=" ">
          <button
           
            className=" flex items-center gap-2 bg-gradient-to-r from-[#703192e2] via-[#ee34ff] to-[#190438] text-white py-2 px-6 rounded-md animate-gradient-signal bg-[length:200%_200%]"
          >
            <RiAiGenerate2 /> Generate Image
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
