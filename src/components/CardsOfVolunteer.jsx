import { Link } from "react-router-dom";

const CardsOfVolunteer = ({post}) => {
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
          <h2 className="card-title">{post.post_title}</h2>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <h1 className="text-base font-medium">Category: {post.category}</h1>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-200">
            <h1 className="text-base font-medium">Deadline: {post.deadline}</h1>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/post/details/${post._id}`}>
            <button className="btn mt-3 w-full bg-primary border-primary hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsOfVolunteer;

