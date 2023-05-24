'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import buyticket from '../../../images/buyticket.png';
import { useContext } from 'react';
import '../../globals.css';
import { Appcontext } from '@/app/layout';

const page = () => {
  const { balance, WinnerAddress, flag } = useContext(Appcontext);
  console.log('winner', WinnerAddress);
  return (
    <div className="flex justify-center place-content-around m-28 mt-40 ">
      <div className="bg-white flex justify-between place-content-around p-14 w-fit h-fit shadow-blue-500 rounded-lg font-bold shadow-lg shadow-primary ">
        <div className="flex items-center m-auto mb-0 mr-10">
          <Image
            className="drop-shadow-lg hover:drop-shadow-xl brightness-100"
            src={buyticket}
            alt="Img not found"
            width={300}
            height={200}
          ></Image>
        </div>

        {flag && (
          <div className="flex flex-col bold content">
            <h1 className="text-white  mx-auto font-extrabold text-2xl w-full text-center py-3 mb-10 rounded-full bg-blue-500">
              TOKEN BALANCE
            </h1>

            <h1 className="text-black outline-blue-500  mx-auto mb-5 text-xl">
              CONTRACT ADDRESS:{' '}
              <span className="text-blue-500">0xfb8E8CBf.....</span>
            </h1>
            <h1 className="text-black mx-auto text-xl">
              AMOUNT: <span className="text-blue-500">{balance} SKT</span>
            </h1>
          </div>
        )}

        {!flag && (
          <div className="flex flex-col bold content">
            <h1 className="text-white  mx-auto font-extrabold text-2xl w-full text-center py-3 mb-10 rounded-full bg-blue-500">
              LOTTERY WINNER
            </h1>

            <h1 className="text-black outline-blue-500  mx-auto mb-5 text-xl">
              WinnerAddress:{' '}
              <span className="text-blue-500">{WinnerAddress}</span>
            </h1>
            <h1 className="text-black mx-auto text-xl">
              Amount: <span className="text-blue-500">{balance} SKT</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
