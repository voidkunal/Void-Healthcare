import React, { useRef } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import ServicesCard from "../layouts/ServicesCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import aboutImg from "../assets/img/about.jpg";
import blogImg1 from "../assets/img/blog1.jpg";
import blogImg2 from "../assets/img/blog2.jpg";
import docImg1 from "../assets/img/doc1.jpg";
import docImg2 from "../assets/img/doc2.jpg";
import docImg3 from "../assets/img/doc3.jpg";
import docImg4 from "../assets/img/doc4.jpg";
import docImg5 from "../assets/img/doc5.jpg";
import docImg6 from "../assets/img/doc6.jpg";

const HomePage = () => {
  // Doctors Slider Data
  const doctorData = [
    { img: docImg1, name: "Dr. Serena Mitchell", specialties: "Orthopedic Surgeon" },
    { img: docImg2, name: "Dr. Julian Bennett", specialties: "Cardiologist" },
    { img: docImg3, name: "Dr. Camila Rodriguez", specialties: "Pediatrician" },
    { img: docImg4, name: "Dr. Victor Nguyen", specialties: "Neurologist" },
    { img: docImg5, name: "Dr. Ethan Carter", specialties: "Dermatologist" },
    { img: docImg6, name: "Dr. Olivia Martinez", specialties: "Ophthalmologist" },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* Home Section */}
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('../assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
        <div className="w-full lg:w-4/5 space-y-5 mt-10">
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Health Choices for a Vibrant Life
          </h1>
          <p>
            Discover a world of personalized healthcare with our team of expert doctors. From consultations to treatments, we prioritize your well-being every step of the way.
          </p>
          <Button title="See Services" onClick={() => console.log("Button Clicked")}/>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="text-4xl font-semibold text-center lg:text-start">About Us</h1>
          <p className="text-justify lg:text-start">
            We are committed to redefining healthcare standards with a patient-first approach. Our team combines expertise, compassion, and technology to deliver exceptional medical services tailored to your needs.
          </p>
          <p className="text-justify lg:text-start">
            From routine check-ups to specialized treatments, our comprehensive care ensures you receive the best possible outcomes. Trust us to be your partners in health.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={aboutImg} alt="About Us" className="rounded-xl" />
        </div>
      </div>

      {/* Doctors Section */}
      <div className="py-16 lg:px-32 px-5">
        <h1 className="text-4xl font-semibold text-center mb-10">Meet Our Doctors</h1>
        <div className="relative">
          <Slider ref={slider} {...settings}>
            {doctorData.map((doctor, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <img src={doctor.img} alt={doctor.name} className="w-full rounded-lg mb-4" />
                  <h2 className="text-lg font-semibold">{doctor.name}</h2>
                  <p className="text-gray-500">{doctor.specialties}</p>
                </div>
              </div>
            ))}
          </Slider>
          <button
            onClick={() => slider.current.slickPrev()}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <FaArrowLeft />
          </button>
          <button
            onClick={() => slider.current.slickNext()}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-16 lg:px-35 px-10 bg-gray-100">
        <h1 className="text-4xl font-semibold text-center mb-10">Latest Blogs</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <BlogCard img={blogImg1} title="The Importance of Regular Check-Ups" />
          <BlogCard img={blogImg2} title="Tips for a Healthy Lifestyle" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
