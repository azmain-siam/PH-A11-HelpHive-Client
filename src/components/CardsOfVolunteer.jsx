import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const CardsOfVolunteer = ({ post }) => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl border dark:border-gray-700">
      <figure>
        <img
          className="object-cover object-center w-full h-56"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />
      </figure>
      <div className="card-body">
        <div className="flex-1 space-y-3">
          <h2 className="card-title font-bold">{post.post_title}</h2>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <h1 className="text-base font-semibold">
              Category: {post.category}
            </h1>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <h1 className="text-base font-semibold">
              Deadline: {post.deadline}
            </h1>
          </div>
        </div>
        <div className="card-actions">
          <Link className="w-full" to={`/post/details/${post._id}`}>
            <button className="btn px-6 w-full rounded-xl mt-3 bg-black border-black hover:border-[#28282B] dark:bg-primary dark:border-primary dark:hover:bg-transparent  dark:hover:text-white hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsOfVolunteer;

CardsOfVolunteer.propTypes = {
  post: PropTypes.object,
};
