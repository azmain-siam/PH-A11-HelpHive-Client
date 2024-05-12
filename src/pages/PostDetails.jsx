import { MdGroup } from "react-icons/md";

import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();

  return (
    <div className="my-8 flex flex-col lg:flex-row gap-6 items-center">
      {/* <Helmet>
        <title>Details | ArtFusion</title>
      </Helmet> */}
      <div className="w-full lg:w-[550px] h-[240px] md:h-[350px] lg:h-[450px] rounded-xl overflow-hidden cursor-default">
        <img
          className="object-cover w-full h-full hover:scale-105 duration-700"
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="w-full md:px-0 md:flex-1">
        <div className="rounded-xl border dark:border-gray-600 p-5 shadow-md w-full">
          <div className="flex flex-col-reverse md:flex-row w-full md:items-center gap-3 md:justify-between border-b pb-3 dark:border-gray-500">
            <div className="flex items-center space-x-3">
              <div className="h-10 md:h-14 w-10 md:w-14 rounded-full bg-slate-400  overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://i.pravatar.cc/32"
                  alt=""
                />
              </div>
              <div>
                <div className="md:text-lg font-bold">Siam Ahmed</div>
                <div className="text-sm font-medium text-neutral-600 dark:text-gray-400">
                  siamhossain27@gmail.com
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <button className="rounded-2xl border dark:border-gray-600 bg-neutral-100 dark:bg-transparent text-xs md:text-sm px-3 py-1 font-semibold dark:text-gray-200 cursor-default">
                Deadline: {post.deadline}
              </button>
            </div>
          </div>

          <div className="my-4">
            <div className="mb-3 text-lg md:text-xl font-bold flex gap-3 flex-col-reverse md:flex-row">
              <h2>{post.post_title}</h2>
              <div>
                <button className="rounded-2xl text-primary dark:text-[#ffb5ba] md:-translate-y-1 flex gap-1 text-sm items-center border bg-[#ff76811c] dark:bg-transparent px-3 py-[2px] font-semibold border-red-400 cursor-default">
                  <MdGroup size={16} />
                  {post.volunteers_needed}
                </button>
              </div>
            </div>
            <div className="mb-3 text-neutral-600 dark:text-gray-300 text-sm">
              {post.description}
            </div>
            <div className="flex items-center space-x-8"></div>
          </div>
          <hr className="my-4" />
          <div className="space-y-5">
            <div className="w-full md:w-1/2 space-x-3">
              <div>
                <h2 className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-semibold">
                  Category
                </h2>
                <p className="font-semibold md:text-lg">{post.category}</p>
              </div>
            </div>

            <div className="w-full space-x-3">
              <div className="">
                <h2 className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-semibold">
                  Location
                </h2>
                <p className="font-semibold md:text-lg">{post.location}</p>
              </div>
            </div>
            <div>
              <Link>
                <button className="btn mt-3 w-full bg-primary border-primary hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                  Be a Volunteer
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
