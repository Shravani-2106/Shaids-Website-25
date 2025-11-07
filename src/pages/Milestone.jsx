import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import img1 from "../assets/images/milestone/img1.jpg";
import img2 from "../assets/images/milestone/img2.jpg";
import img3 from "../assets/images/milestone/img3.jpg";
import img4 from "../assets/images/milestone/img4.jpg";
import img5 from "../assets/images/milestone/img5.jpg";
import img6 from "../assets/images/milestone/img6.jpg";
import img7 from "../assets/images/milestone/img7.jpg";
import img8 from "../assets/images/milestone/img8.jpg";
import img9 from "../assets/images/milestone/img9.jpg";
import img10 from "../assets/images/milestone/img10.jpg";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

const Milestone = () => {
  const navigate = useNavigate();

  const images = [img1, img2, img3, img4, img5, img7, img8, img9, img10, img6];

  return (
    <>
      <Navbar />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-12 sm:left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
      >
        <ArrowLeft className="w-8 h-8 mr-3" />
        <span className="hidden sm:inline font-semibold"></span>
      </button>

      {/* Main Content */}
      <div className="bg-bgGradient min-h-screen flex flex-col items-center px-6 md:px-12 py-20">
        {/* Heading */}
        <h1 className="text-purple-400 text-4xl md:text-6xl font-NordBold mb-6 text-center">
          Milestone
        </h1>

        {/* Description */}
        <p className="text-white text-center font-Outfit max-w-3xl md:max-w-5xl mb-10 leading-relaxed">
          <span className="text-[#A576DF] font-semibold">Milestone</span> is the
          annual event of our college, bringing together students, faculty, and
          industry professionals for a vibrant celebration of innovation, talent,
          and achievement. It features a mix of technical competitions, cultural
          performances, workshops, and guest lectures — providing a platform for
          students to showcase their skills and creativity. The event fosters
          learning, networking, and collaboration, making it a highlight of the
          academic year.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mb-16">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Milestone Event ${index + 1}`}
                className="w-full h-52 object-cover rounded-xl group-hover:opacity-90 transition"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Milestone;
