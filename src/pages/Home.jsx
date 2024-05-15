import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import VolunteerNeedSection from "../components/VolunteerNeedSection";
import { Helmet } from "react-helmet";
import About from "../components/About";
import Feature from "../components/Feature";

const Home = () => {
  const posts = useLoaderData();
  return (
    <div className="space-y-20 mb-20">
      <Helmet>
        <title>Home | HelpHive</title>
      </Helmet>
      <Banner />
      <VolunteerNeedSection posts={posts} />
      <About />
      <Feature />
    </div>
  );
};

export default Home;
