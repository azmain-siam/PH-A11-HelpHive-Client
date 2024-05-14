/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import CardsOfVolunteer from "../components/CardsOfVolunteer";
import axios from "axios";

const NeedVolunteer = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`${import.meta.env.VITE_URL}/posts?&search=${search}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //       setLoading(false);
  //     });
  // }, [search]);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_URL}/posts?&search=${search}`
      );
      setPosts(data);
      setLoading(false);
    };
    getData();
  }, [search]);

  if (loading) {
    return (
      <div className="flex h-full w-full justify-center items-center pt-20">
        <Bars
          height="80"
          width="80"
          color="#E9424F"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className="mt-5">
      {/* <h3 className="text-2xl text-center md:text-4xl font-spartan font-bold mb-8">
        <span className="text-primary">Need</span> Volunteer
      </h3> */}
      <div className="flex justify-center my-7">
        <form onSubmit={handleSearch} className="max-w-md w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              defaultValue={search}
              className="block w-full focus:outline-none focus:border-black p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
              placeholder="Search here..."
              name="search"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 duration-300 hover:text-black dark:hover:text-white bg-primary border border-primary hover:border-black hover:font-semibold hover:bg-transparent focus:outline-none font-medium uppercase rounded-xl text-sm px-4 py-[6px]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2 text-center">
        {posts.map((post) => (
          <CardsOfVolunteer key={post._id} post={post} />
        ))}
        {/* {posts.length < 1 && (
          <div className="text-center my-14">
            <img className="w-[200px] mx-auto" src={notFound} alt="" />
            <h3 className="text-center mt-5 font-medium text-xl">
              Can't Find Anything!
            </h3>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default NeedVolunteer;
