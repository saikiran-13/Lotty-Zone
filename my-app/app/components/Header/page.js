'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import logo from '../../../images/tokenlogo.png';
import Image from 'next/image';
import profile from '../../../images/profile.png';
import { Appcontext } from '@/app/layout';

const Header = () => {
  const { setSigner, signer, networkName, setNetworkName } =
    useContext(Appcontext);
  const pathname = usePathname();
  let connect = pathname == '/' ? true : false;

  useEffect(() => {
    let signerAddress = localStorage.getItem('connectedAddress');
    let NetworkName = localStorage.getItem('NetworkName');
    setSigner(`${signerAddress.slice(0, 9)}.....`);
    setNetworkName(`${NetworkName}`);
  }, [signer, networkName]);

  return (
    <>
      <div className="w-full flex mb-10 h-max">
        <div className="flex bg-white w-full ml-0 p-5 items-center">
          <div className="flex gap-5">
            <Image
              src={logo}
              alt="Image not found"
              width={40}
              height={10}
            ></Image>
            <h1 className="text-3xl ml-5 p-2 text-black  font-serif font-bold bg-white border-4 border-l-red-600 border-t-yellow-400 border-b-blue-600 border-r-green-600 rounded-lg">
              <span className="text-blue-500 mr-2">Lotty</span>zone
            </h1>
          </div>

          {!connect && (
            <div className="address flex justify-end w-full place-content-around mr-5 ">
              <div className="flex  bg-white shadow-sm shadow-blue-500 rounded-full w-max py-5 px-10 outline-none ">
                <Image
                  className="w-5 h-5 mr-3 mt-1"
                  src={profile}
                  alt="Profile not found"
                ></Image>
                <h1 className="text-xl text-blue-500 font-bold">
                  {signer}
                  <span className="text-black"> &nbsp;|&nbsp;</span>
                </h1>
                <h1 className="text-xl text-blue-500 font-bold">
                  {networkName}
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
