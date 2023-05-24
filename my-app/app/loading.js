'use client';
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full m-auto mt-52">
      <center>
        <div className="w-full">
          <center>
            <TailSpin color="#2196F3" />
          </center>
        </div>
        <br></br>

        <h1>Loading....</h1>
      </center>
    </div>
  );
};

export default Loading;
