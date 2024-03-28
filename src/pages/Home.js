import React from "react";

const Home = () => {
  return (
    <div className="h-4/5 flex place-content-center bg-orange-400 ml-10  mr-10 rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 gap-8 size-full m-2 content-center p-10">
        <div className="text-5xl font-extrabold">
          I am Mehul Anand, <br />a Full Stack Devloper
        </div>
        <div>
          I design and create resposive web apps to turns your ideas into
          reality.
        </div>
        <button className="text-xl text-white w-32 bg-black rounded-lg p-2 pl-1 pr-1 hover:bg-amber-200  hover:text-black ">
          Get in touch
        </button>
      </div>

      <div className=" place-content-center flex justify-center size-full m-2 text-orange-400">
        <img
          src="https://devathon.com/wp-content/uploads/2020/01/react-js-developers-devathon-2-1.png"
          alt="abcd"
        />
      </div>
    </div>
  );
};
export default Home;
