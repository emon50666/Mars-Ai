import horror from '../assets/image/horror.png';


const PostBanner = () => {
    return (
        <div
            className="  w-full min-h-44 lg:min-h-60 object-cover bg-cover  bg-center justify-center flex items-center"
            style={{
                backgroundImage: `url(${horror})`,
            }}
        >
            {/* Overlay */}
            <div className='absolute inset-0 h-80 bg-black z-10 opacity-0'>
            </div>

            {/* Content */}
            <div className=" lg:pt-0 px-2">
                <div className="">
                    <h1 className="text-3xl md:text-6xl text-white">
                        Create Image
                    </h1>

                </div>

            </div>
        </div>
    );
};

export default PostBanner;
