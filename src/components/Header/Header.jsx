import { Link } from 'react-router-dom';
import logo from '../../assets/image/log.png'
import { IoAddOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <div className='flex justify-between w-full  px-2 mt-1 absolute z-50'>
            <div>

                <img src={logo} alt="Mars Ai" className='w-24 h-10 relative bottom-1' />
            </div>
            <div>
                <Link to={'/create-post'}
                    className="flex items-center gap-1 bg-gradient-to-r from-[#2216cd] via-[#8b68ff] to-[#cb78ff] text-white py-1 px-4 rounded-full animate-gradient-signal bg-[length:200%_200%]"
                >
           Create      <IoAddOutline  className='text-lg'/>  
                </Link>


            </div>
        </div>
    );
};

export default Header;