import banner from '../../assets/image/2.png';
import TypeIt from "typeit-react";

const Banner = () => {
  return (
    <div
      className="relative -z-10   w-full h-screen   bg-center justify-center flex items-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      {/* <div className='absolute inset-0 bg-black z-10 opacity-30'>

      </div> */}

      {/* Content */}
      <div className="pt-24 lg:pt-0 px-2">
      <div className="w-full justify-center mx-auto text-center text-black">
  <p className="text-sm font-semibold uppercase mb-3 max-w-sm mx-auto text-center justify-center text-[#a42dff] bg-gradient-to-r from-[#2216cd]/10 via-[#7768ff]/10 to-[#cb78ff]/10 py-1 px-6 rounded-full animate-gradient-signal bg-[length:200%_200%] ">
    Next-generation of AI Images
  </p>
  <h1 className="text-3xl md:text-6xl font-extrabold   capitalize pb-1 text-transparent sm:leading-0 leading-6 bg-clip-text bg-gradient-to-r from-[#f86bff] via-[#0978ff] to-[#d75eff] animate-gradient animate-gradient-signal bg-[length:200%_200%]">
    Unleash Your  Imagination <br /> <span className='mr-2'>with</span> 
    <TypeIt
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
    return instance
  }}
/>


  </h1>

  <p className="mt-2 text-gray-600 pb-5 text-[13px] md:text-lg max-w-md  mx-auto text-center justify-center">
    Cost-effective solution to generate powerful AI photos and art generation. What will you create?
  </p>
  

</div>

      </div>
    </div>
  );
};

export default Banner;
