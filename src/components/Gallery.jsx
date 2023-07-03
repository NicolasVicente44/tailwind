import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full px-4 py-16">
      <h2 className="text-center text-gray-700 p-4">Photos</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1530638886726-284cde15fcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1054&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1595322647737-26de310af5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1547027095-66c5c464e496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1547965255-b0040206de29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="/"
          />
        </div>
        <div>
          <img className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1526374073174-7661a8028eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
