import banner from '../../assets/image/2.png';

const Banner = () => {
  return (
    <div
      className="relative -z-10   w-full h-screen bg-cover bg-center justify-center flex items-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay */}
      

      {/* Content */}
      <div className="pt-24 lg:pt-0 px-2">
      <div className="w-full justify-center mx-auto text-center text-black">
  <p className="text-sm font-semibold uppercase mb-2 max-w-sm mx-auto text-center justify-center text-[#a42dff] bg-gradient-to-r from-[#2216cd]/10 via-[#7768ff]/10 to-[#cb78ff]/10 py-1 px-6 rounded-full animate-gradient-signal bg-[length:200%_200%] ">
    Next-generation of AI Images
  </p>
  <h1 className="text-3xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#5316cd] via-[#0978ff] to-[#d75eff] animate-gradient animate-gradient-signal bg-[length:200%_200%]">
    Unleash Your Imagination with <br /> AI-Generated Art
  </h1>

  <p className="mt-4 text-gray-600 pb-5 text-[13px] md:text-lg max-w-md  mx-auto text-center justify-center">
    Cost-effective solution to generate powerful AI photos and art generation. What will you create?
  </p>
</div>

      </div>
    </div>
  );
};

export default Banner;
