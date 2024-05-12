const VolunteerNeedSection = ({ posts }) => {
  console.log(posts);
  const displayedPosts = posts.slice(0, 6);
  return (
    <div>
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-4xl font-bold mb-3">
          Volunteer Needs Now
        </h3>
        <div className="w-40 md:w-64 h-[3px] bg-primary mx-auto mb-5"></div>
        <p className="text-[#585858] text-sm md:text-base w-[90%] md:w-[600px] lg:w-[800px] mx-auto">
          Browse through a diverse range of volunteer opportunities spanning
          various categories such as social service, education, healthcare,
          environmental conservation, and animal welfare.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-2">
        {displayedPosts.map((post) => (
          <div
            key={post._id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
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
                  <h1 className="text-base font-medium">
                    Category: {post.category}
                  </h1>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <h1 className="text-base font-medium">
                    Deadline: {post.deadline}
                  </h1>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn mt-3 w-full bg-primary border-primary hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeedSection;
