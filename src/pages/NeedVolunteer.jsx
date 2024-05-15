/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import CardsOfVolunteer from "../components/CardsOfVolunteer";
import axios from "axios";
import { FaThList } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NeedVolunteer = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  console.log(isChecked);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
  };

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_URL}/posts?search=${search}`
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
    <div className="my-5">
      <div className="flex gap-4 flex-col md:flex-row justify-between my-7 md:px-4">
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

        {/* Layout Toggle */}
        <label className=" border w-fit shadow-card relative inline-flex cursor-pointer select-none items-center justify-center border-gray-300 rounded-xl  dark:bg-gray-700 dark:border-gray-600 dark:text-white p-2">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`flex gap-2 items-center rounded py-2 px-[25px] font-medium ${
              !isChecked
                ? "text-primary bg-[#f4f7ff] dark:bg-gray-700"
                : "text-body-color"
            }`}
          >
            <BsFillGrid3X3GapFill />
          </span>
          <span
            className={`flex gap-2 items-center rounded py-2 px-[25px] font-medium ${
              isChecked
                ? "text-primary bg-[#f4f7ff] dark:bg-gray-700"
                : "text-body-color"
            }`}
          >
            <FaThList />
          </span>
        </label>
      </div>

      {!isChecked ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2 text-center">
          {posts.map((post) => (
            <CardsOfVolunteer key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto mt-7 border border-[#e4e4e4] dark:border-gray-500 rounded-lg">
          <table className="table">
            <thead className="text-sm text-gray-500 dark:text-gray-400">
              <tr className="border-[#e4e4e4] dark:border-gray-500">
                <th>Image</th>
                <th>Post Title</th>
                <th>Organizer Name</th>
                <th>Category</th>
                <th>Volunteer Need</th>
                <th>Deadline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {posts.map((post) => (
                <tr
                  key={post._id}
                  className="font-semibold border-[#e4e4e4] dark:border-gray-500"
                >
                  <td>
                    <img
                      className="w-16 h-12 object-cover rounded-md ml-2"
                      src={post.thumbnail}
                    />
                  </td>
                  <td>{post.post_title}</td>
                  <td>{post.organizerName}</td>
                  <td>{post.category}</td>
                  <td>{post.volunteers_needed}</td>
                  <td>{new Date(post.deadline).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/post/details/${post._id}`}>
                      <button className="py-2 px-2 border rounded-md w-full bg-black border-black hover:border-[#28282B] dark:bg-primary dark:border-primary dark:hover:bg-transparent  dark:hover:text-white hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default NeedVolunteer;
