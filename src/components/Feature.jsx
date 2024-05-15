/* eslint-disable react/no-unescaped-entities */
import buyHome from "../assets/BuyAHome.svg";
import rentHome from "../assets/RentAHome.svg";
import neighborhood from "../assets/Neighborhoods.svg";

const Feature = () => {
  return (
    <div
      data-aos="fade-up"
      className="max-w-7xl w-[93%] md:w-[93%] mx-auto"
    >
      <h3 className="text-2xl md:text-4xl capitalize text-center font-bold mb-3">
        See how we can help
      </h3>
      <div className="w-52 md:w-64 h-[3px] bg-primary mx-auto mb-5"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <img className="w-40 mx-auto" src={buyHome} />
          <h3 className="text-2xl font-semibold mb-2">Our Impact</h3>
          <p className="w-[80%] mx-auto text-[#585858] dark:text-gray-300 text-sm">
            Discover the tangible difference we're making in communities
            worldwide. From environmental conservation to social services, delve
            into our diverse projects and witness the transformative power of
            volunteerism.
          </p>
        </div>
        <div className="text-center">
          <img className="w-40 mx-auto" src={rentHome} />
          <h3 className="text-2xl font-semibold mb-2">
            Empowering Change Together
          </h3>
          <p className="w-[80%] mx-auto text-[#585858] dark:text-gray-300 text-sm">
            Join us in our mission to create positive change. Explore the array
            of volunteer opportunities available and see how your contribution
            can empower individuals, uplift communities, and drive meaningful
            impact across various sectors.
          </p>
        </div>
        <div className="text-center">
          <img className="w-40 mx-auto" src={neighborhood} />
          <h3 className="text-2xl font-semibold mb-2">Tailored Solutions</h3>
          <p className="w-[80%] mx-auto text-[#585858] dark:text-gray-300 text-sm">
            Explore the comprehensive range of services we offer to address
            pressing social and environmental challenges. From educational
            initiatives to healthcare support, find tailored solutions that
            align with your passions and expertise, and embark on a journey to
            make a lasting difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
