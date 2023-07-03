import React from "react";

const Activities = () => {
  return (
    <div className="max-w-4xl mx-auto md:flex mt-8">
      <div className="relative p-4 flex items-center justify-center">
        <h3 className="absolute z-10 text-white text-2xl font-bold">
          Find Zen
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1551241090-67de81d3541c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1509&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4 flex items-center justify-center">
        <h3 className="absolute z-10 text-white text-2xl font-bold">
          Explore Forests
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4 flex items-center justify-center">
        <h3 className="absolute z-10 text-white text-2xl font-bold">
          See the City
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
