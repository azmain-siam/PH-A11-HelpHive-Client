import CardsOfVolunteer from "./CardsOfVolunteer";

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
        {displayedPosts.map((post) => (
          <CardsOfVolunteer key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeedSection;
