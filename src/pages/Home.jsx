import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import VolunteerNeedSection from "../components/VolunteerNeedSection";
import { Helmet } from "react-helmet";

const Home = () => {
  const posts = useLoaderData();
  return (
    <div className="space-y-14">
      <Helmet>
        <title>Home | HelpHive</title>
      </Helmet>
      <Banner />
      <VolunteerNeedSection posts={posts} />
    </div>
  );
};

export default Home;
