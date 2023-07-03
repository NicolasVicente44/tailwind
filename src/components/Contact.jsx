import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto p-4 py-16">
      <h2 className="text-center text-gray-700">Contact Us</h2>
      <p className="text-center text-gray-700 py-2">
        We would love to hear from you!
      </p>
      <div className="grid md:grid-cols-2">
        <img
          className="w-full md:h-full object-cover max-h-[500px] h-[200px]"
          src="https://images.unsplash.com/photo-1567120256540-cf483479a6a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="/"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First Name" />
            <input className="border m-2 p-2" type="text" placeholder="Last Name" />
            <input className="border m-2 p-2 " type="email" placeholder="Your Email" />
            <input className="border m-2 p-2 " type="tel" placeholder="Your Phone Number" />
            <input className='border col-span-2 p-2 m-2' type="text" placeholder="Address" />
            <textarea className="border col-span-2 m-2 p-2" placeholder="Message..." cols="30" rows="10"></textarea>
            <button className="col-span-2 m-2">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
