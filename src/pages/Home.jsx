import { useState } from "react";
import Banner from "../components/Banner/banner";
import { Card, Loader, FormField } from '../components/index'

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null)
  const [searchText, setSearchText] = useState('hello emon')
  return (
    <div className=" max-w-7xl">
      <div className="">
        <Banner />
      </div>
      {/* form filed */}
      <div>
        <FormField />
      </div>
      {/* show loader  */}
      <div>
        {loading ? (
          <div className="flex justify-center items-center ">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium  text-[#303138]">
                Showing results for <span className="text-gray-700 ">{searchText} </span>
              </h2>
            )}
            {/* showing search result image */}
            <div className="grid sm:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">

            </div>
          </>

        )}
      </div>
    </div>
  );
};

export default Home;