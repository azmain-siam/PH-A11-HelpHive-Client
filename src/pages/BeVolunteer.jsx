import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const BeVolunteer = () => {
  const post = useLoaderData();
  const {
    _id,
    post_title,
    description,
    category,
    location,
    volunteers_needed,
    deadline,
    organizerEmail,
    organizerName,
    thumbnail,
  } = post;

  const { user } = useAuth();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (user.email === organizerEmail) {
      return toast.error("You can't request on your own post");
    }

    if (volunteers_needed < 1) {
      return toast.error(
        "The owner of the post no longer requires any volunteers."
      );
    }

    const status = "requested";
    const volunteerName = user.displayName;
    const volunteerEmail = user.email;
    const requestId = _id;
    const requestData = {
      requestId,
      thumbnail,
      post_title,
      description,
      category,
      location,
      volunteers_needed,
      deadline,
      organizerName,
      organizerEmail,
      status,
      volunteerName,
      volunteerEmail,
    };
    try {
      const { data } = await axios.post(
        `https://helphive.vercel.app/requests`,
        requestData,
        { withCredentials: true }
      );
      console.log(data);
      navigate("/manage-post");
      return toast.success("Requested Successfully!");
    } catch (error) {
      return toast.error(error.response.data);
    }
  };

  return (
    <div className="my-6">
      <Helmet>
        <title>Apply | HelpHive</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 md:p-5 w-[65%] mx-auto border dark:border-gray-600 rounded-lg"
      >
        <div>
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-primary">Informations</span> At a glance:
          </h3>
        </div>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Post Title
            </label>
            <input
              type="text"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={post_title}
              required=""
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Organizer Name
            </label>
            <input
              type="text"
              disabled
              {...register("organizerName")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={organizerName}
            />
          </div>
          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Organizer Email
            </label>
            <input
              type="text"
              disabled
              {...register("organizerEmail")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={organizerEmail}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Volunteer Name
            </label>
            <input
              type="text"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={user.displayName}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Volunteer Email
            </label>
            <input
              type="email"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={user.email}
            />
          </div>

          <div className="col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <input
              type="text"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={location}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Number of Voluteer Needed
            </label>
            <input
              type="number"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              defaultValue={volunteers_needed}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="number"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 cursor-not-allowed dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={category}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Deadline
            </label>
            <input
              type="text"
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 cursor-not-allowed block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={new Date(deadline).toLocaleDateString()}
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Description
            </label>
            <textarea
              id="description"
              disabled
              rows="4"
              className="block cursor-not-allowed p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={description}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn mt-3 px-12 bg-primary border-primary hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BeVolunteer;
