'use client';
import React from 'react';

const Error = (error, reset) => {
  return (
    <div className="flex flex-col justify-center items-center w-full m-auto mt-52">
      <center>
        <div>Error</div>
        <button className="bg-green-500 text-white p-3 m-2" onClick={reset}>
          Try Again
        </button>
      </center>
    </div>
  );
};

export default Error;
