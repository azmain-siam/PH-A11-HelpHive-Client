import ReactDatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";

const UpdatePost = () => {
  const post = useLoaderData();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date(post.deadline));
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const organizerName = user.displayName;
    const organizerEmail = user.email;
    const organizerImage = user.photoURL;

    const deadline = startDate;
    const {
      post_title,
      description,
      category,
      location,
      volunteers_need,
      thumbnail,
    } = data;

    const volunteers_needed = parseInt(volunteers_need);
    const updatedPostData = {
      organizerName,
      organizerEmail,
      organizerImage,
      deadline,
      post_title,
      description,
      category,
      location,
      volunteers_needed,
      thumbnail,
    };
    try {
      const { data } = await axios.put(
        `https://helphive.vercel.app/posts/${post._id}`,
        updatedPostData,
        { withCredentials: true }
      );
      console.log(data);
      reset();
      navigate("/manage-post");
      return toast.success("Updated Successfully!");
    } catch (error) {
      console.log(error);
      return toast.error("Can't Update!");
    }
  };

  return (
    <div className="my-6">
      <Helmet>
        <title>Update | HelpHive</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 md:p-5 w-[65%] mx-auto border dark:border-gray-600 rounded-lg"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-primary">Update</span> Voluteer Post:
          </h3>
        </div>

        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Organizer Name
            </label>
            <input
              type="text"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={user.displayName}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Organizer Email
            </label>
            <input
              type="email"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={user.email}
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Post Title
            </label>
            <input
              type="text"
              defaultValue={post.post_title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter Post Title"
              required
              {...register("post_title")}
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <input
              type="text"
              defaultValue={post.location}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter Location"
              required
              {...register("location")}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Number of Voluteer Needed
            </label>
            <input
              type="number"
              defaultValue={post.volunteers_needed}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Number of Volunteers you need"
              required
              {...register("volunteers_need")}
            />
          </div>
          <div className="col-span-2 ">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Thumbnail
            </label>
            <input
              type="text"
              defaultValue={post.thumbnail}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Thumbnail Image URL"
              {...register("thumbnail")}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              required
              {...register("category")}
              defaultValue={post.category}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 font-medium *:font-medium dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option disabled>Select category</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Deadline
            </label>
            <div>
              <ReactDatePicker
                wrapperClassName="w-full"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 w-full font-medium *:font-medium dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                required
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Description
            </label>
            <textarea
              rows="3"
              defaultValue={post.description}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write Description"
              required
              {...register("description")}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn mt-3 px-12 bg-primary border-primary hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105"
          >
            update post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
