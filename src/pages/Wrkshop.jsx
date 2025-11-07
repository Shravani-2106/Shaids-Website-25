import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import img1 from "../assets/images/workshop/abhijeet.jpg";
import img2 from "../assets/images/workshop/ayush.jpg";
import img3 from "../assets/images/workshop/bhumika.jpg";
import img4 from "../assets/images/workshop/chetana.jpg";
import img5 from "../assets/images/workshop/sahil.jpg";
import img6 from "../assets/images/workshop/raaj.jpg";
import img7 from "../assets/images/workshop/volunteer3.jpg";
import img8 from "../assets/images/workshop/frame.jpg";
import img9 from "../assets/images/workshop/volunteer2.jpg";

import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

const Wrkshop = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-12 sm:left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
      </button>

      {/* Main Section */}
      <div className="bg-bgGradient min-h-screen flex flex-col items-center px-6 md:px-10 py-16">
        {/* Title */}
        <h1 className="text-purple-400 text-3xl sm:text-4xl md:text-6xl text-center font-NordBold mb-6">
          WORKSHOP
        </h1>

        {/* Description */}
        <p className="text-white text-center font-Outfit max-w-3xl md:max-w-5xl mb-10 leading-relaxed">
          Beyond Bytes is an immersive workshop designed to bridge the gap
          between imagination and innovation. Hosted under the visionary Shaids
          Department, this hands-on session dives into cutting-edge technology,
          equipping participants with practical skills and creative insights.
          <br />
          Join us to push boundaries, explore new dimensions in tech, and take
          your expertise beyond the ordinary!
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {[img1, img8, img2, img3, img4, img5, img6, img7, img9].map(
            (img, index) => (
              <img
                key={index}
                src={img}
                alt={`Workshop ${index + 1}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            )
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wrkshop;
