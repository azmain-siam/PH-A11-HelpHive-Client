/* eslint-disable react/no-unescaped-entities */
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import profile1 from "../assets/pic (1).jpg";
import profile2 from "../assets/pic (2).jpg";
import profile3 from "../assets/pic (3).jpg";

const About = () => {
  return (
    <div data-aos="fade-up" className="text-center mt-20">
      <div className="mt-10 md:mt-14">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Meet the Team</h2>
        <div className="w-40 md:w-48 h-[3px] bg-primary mx-auto mb-5"></div>
        <p className="text-[#585858] dark:text-gray-300 text-sm md:text-base w-[90%] md:w-[600px] lg:w-[800px] mx-auto">
          We're a diverse team of avid readers, writers, and book lovers who are
          dedicated to promoting literacy and fostering a vibrant literary
          community.
        </p>
      </div>
      <div className="grid grid-cols-1 mb-10 md:grid-cols-3 justify-center gap-3 md:gap-9 w-[80%] mx-auto mt-4 md:mt-6">
        <div className="mt-7 flex flex-col items-center  border-2 hover:border-primary hover:bg-[#e569970e] duration-300 p-9 rounded-xl cursor-pointer">
          <div className="h-52 w-52 mx-auto bg-slate-500 rounded-full mb-3">
            <img className="w-full rounded-full" src={profile1} alt="" />
          </div>
          <h2 className="text-2xl text-[#131313] font-semibold mb-1">
            John Whitelong
          </h2>
          <h3 className="text-xl font-medium text-[#131318b3] mb-3">
            Lead Artist
          </h3>
          <div className="flex gap-2 ">
            <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer  hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaFacebookF size={18} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaInstagram size={19} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col items-center  border-2 hover:border-primary hover:bg-[#e569970e] duration-300 p-9 rounded-xl cursor-pointer">
          <div className="h-52 w-52 mx-auto bg-slate-500 rounded-full mb-3">
            <img className="w-full rounded-full" src={profile2} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl text-[#131313] font-semibold mb-1">
              Chris Zimerman
            </h2>
            <h3 className="text-xl font-medium text-[#131318b3] mb-3">
              Creative Director
            </h3>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer  hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaFacebookF size={18} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaInstagram size={19} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col items-center  border-2 hover:border-primary hover:bg-[#e569970a] duration-300 p-9 rounded-xl cursor-pointer">
          <div className="h-52 w-52 mx-auto bg-slate-500 rounded-full mb-3">
            <img className="w-full rounded-full" src={profile3} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl text-[#131313] font-semibold mb-1">
              Michael Johnson
            </h2>
            <h3 className="text-xl font-medium text-[#131318b3] mb-3">
              Art Curator
            </h3>
          </div>
          <div className="flex gap-2 ">
            <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer  hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaFacebookF size={18} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaInstagram size={19} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
