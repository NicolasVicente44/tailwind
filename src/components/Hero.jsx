import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1610375228550-d5cabc1d4090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-gray-800 p-4">
          <h1 className="font-bold text-4xl">Experience Adventure</h1>
          <h2 className="text-4xl py-4 italic">With BRAND</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            cupiditate accusamus nostrum aliquam deserunt, saepe cum minima
            recusandae praesentium laborum iste minus magnam quaerat animi nisi
            corporis quae aspernatur. Molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
