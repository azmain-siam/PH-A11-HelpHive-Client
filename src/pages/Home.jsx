import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import VolunteerNeedSection from "../components/VolunteerNeedSection";

const Home = () => {
  const posts = useLoaderData();
  return (
    <div className="space-y-14">
      <Banner />
      <VolunteerNeedSection posts={posts} />
    </div>
  );
};

export default Home;
