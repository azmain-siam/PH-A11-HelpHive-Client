import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { Bars } from "react-loader-spinner";

import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

const AddVolunteer = () => {
  const { user, loading } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit, reset } = useForm();

  if (loading) {
    return (
      <div className="flex h-full w-full justify-center items-center mt-10">
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
    <div className="mb-5 mt-10 max-w-7xl w-[95%] md:w-[93%] mx-auto">
      {/* <Helmet>
        <title>Add Craft | ArtFusion</title>
      </Helmet> */}
      <div className="mb-10 md:mb-14">
        <h3 className="text-2xl text-center md:text-4xl font-bold mb-8">
          <span className="text-primary">Add</span> Volunteer Post
        </h3>
        <form
          // onSubmit={handleSubmit(handleAdd)}
          className="card-body p-5 md:px-14 md:py-8 w-full border dark:border-gray-700 rounded-xl"
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user.displayName}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                defaultValue={user.email}
                disabled
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Post Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Post Title"
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
                {...register("postTitle")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Location
                </span>
              </label>
              <input
                type="text"
                {...register("location")}
                placeholder="Location"
                required
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Category
                </span>
              </label>
              <select
                {...register("category")}
                required
                className="select font-medium text-base *:font-medium focus:outline-none focus:border bg-[#EEEDEE]"
              >
                <option disabled selected>
                  Select a Category
                </option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Social Service</option>
                <option>Animal Welfare</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Number of Volunteers Needed
                </span>
              </label>
              <input
                type="number"
                {...register("volunteer_needed")}
                placeholder="Number of Volunteer"
                required
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="form-control ">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Thumbnail URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                {...register("photoURL")}
                className="input focus:outline-none focus:border bg-[#EEEDEE]"
                required
              />
            </div>

            {/* Date Picker */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base">
                  Deadline
                </span>
              </label>
              <div className="input flex gap-1 items-center focus:outline-none focus:border bg-[#EEEDEE] w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 48 48"
                >
                  <mask id="ipSApplication0">
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        d="M40.04 22v20h-32V22"
                      ></path>
                      <path
                        fill="#fff"
                        d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                      ></path>
                    </g>
                  </mask>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipSApplication0)"
                  ></path>
                </svg>
                <DatePicker
                  className="w-full"
                  {...register("deadline")}
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">
                Description
              </span>
            </label>
            <textarea
              rows="3"
              {...register("description")}
              placeholder="Write a Description..."
              required
              className="textarea focus:outline-none focus:border bg-[#EEEDEE] text-base"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-primary border-primary hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteer;
