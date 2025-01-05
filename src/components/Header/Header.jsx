import logo from '../../assets/image/log.png'

const Header = () => {
    return (
        <div className='flex justify-between px-2 pt-1  z-50'>
            <div>

                <img src={logo} alt="Mars Ai" className='w-24 h-10' />
            </div>
            <div>
            <button
  className="bg-gradient-to-r from-[#2216cd] via-[#7768ff] to-[#cb78ff] text-white py-1 px-6 rounded-full animate-gradient-signal bg-[length:200%_200%]"
>
  Create
</button>


            </div>
        </div>
    );
};

export default Header;