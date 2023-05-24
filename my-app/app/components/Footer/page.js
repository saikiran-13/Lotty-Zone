'use client';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex-col fixed bottom-0 bg-blue-500 text-center p-5">
      <div className="flex gap-5 mt-3 justify-around place-content-center text-white text-2xl font-serif font-bold">
        <h1>About</h1>
        <h1>Winners</h1>
        <h1>Announcements</h1>
        <h1>Community</h1>
      </div>
      <div className="flex m-auto  justify-center items-center mt-8 rounded-sm bg-white px-3 py-1 w-fit">
        <h1 className="text-2xl font-serif font-bold text-blue-500 ">
          Lotty Zone &copy; All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
