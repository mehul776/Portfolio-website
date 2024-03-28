import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import calculator from "../images/calculator.png";
import todo_list from "../images/todo_list.png";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Projects = () => {
  const slides = [
    {
      url: "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/65/15/ac/6515ac76-afff-b895-1787-82ff7c2fe3b8/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-0-85-220.png/1200x630wa.png",
    },
    {
      url: "https://media.geeksforgeeks.org/wp-content/uploads/20230518223324/Screenshot-from-2023-05-18-22-33-11.png",
    },
    {
      url: "https://thumbs.dreamstime.com/z/process-sign-process-grunge-rubber-stamp-white-background-process-stamp-process-sign-process-grunge-rubber-stamp-254653845.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const tranfer = () => {
    if (currentIndex === 0)
      window.location.href = "https://mehul776.github.io/ReactCalculator/";
    else {
    }
  };

  return (
    <div className="h-4/5 flex  bg-orange-400 ml-10  mr-10 rounded-lg p-2">
      <div className="w-3/6">
        {" "}
        <div className="grid grid-cols-1 gap-5 size-full m-2 content-center p-10">
          <div className="text-5xl font-extrabold">
            I have made these projects using :
          </div>
          <div className="text-2xl text-stone-800 grid grid-cols-2">
            <li>
              Node js <IoLogoNodejs />
            </li>
            <li>
              tailwind css
              <SiTailwindcss />
            </li>
            <li>
              HTML
              <FaHtml5 />
            </li>
            <li>
              React
              <FaReact />
            </li>
          </div>
        </div>
      </div>

      <div className=" w-3/6 place-content-center flex justify-center">
        <div className="bg-black max-w-[600px] h-[400px] w-full m-auto py-16 px-4 relative rounded-lg text-orange-400 text-center text-2xl font-extrabold pt-10">
          MY PROJECTS
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="bg-white w-full h-full rounded-2xl bg-center bg-cover duration-200"
            onClick={tranfer}
          ></div>
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer text-white"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
