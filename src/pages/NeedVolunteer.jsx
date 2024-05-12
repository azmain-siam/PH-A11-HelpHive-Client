import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import CardsOfVolunteer from "../components/CardsOfVolunteer";

const NeedVolunteer = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

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
      <h3 className="text-2xl text-center md:text-4xl font-spartan font-bold mb-8">
        <span className="text-primary">Need</span> Volunteer
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
        {posts.map((post) => (
          <CardsOfVolunteer key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
