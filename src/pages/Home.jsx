import { useState } from "react";
import Banner from "../components/Banner/banner";
import {  Loader, FormField } from '../components/index'
import RenderCard from "../components/RenderCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState(null)
  const [searchText, setSearchText] = useState('')
  return (
    <div className=" ">
      <div className="">
        <Banner />
      </div>
      {/* form filed */}
      <div>
        <FormField />
      </div>
      {/* show loader  */}
      <div>
        <h1>the Community showcase</h1>
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
              {searchText ?(
                <RenderCard data={[]} title="No Search Result Found" />
              ) :(
                <RenderCard  data={[]} title="No Post Found"/>
              )}
            </div>
          </>

        )}
      </div>
    </div>
  );
};

export default Home;