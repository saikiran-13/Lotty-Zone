'use client';
import sideImage from '../../../images/pngegg.png';
import Image from 'next/image';
import Login from '../Login/page';

const Homepage = () => {
  return (
    <div className="flex-grow flex items-center justify-between gap-10 text-center">
      <div className="flex flex-col ml-10">
        <div className="flex flex-col text-slate-700 text-6xl  w-full justify-center gap-10">
          <h1>
            The Secure Platform In The
            <span className="text-blue-500"> DeFI Space</span>
          </h1>
          <h1 className="text-5xl">Participate & Win the Lottery </h1>
          <h1 className="text-5xl">in This Zone</h1>
        </div>
        <div>
          <Login />
        </div>
      </div>
      <div className="flex place-content-center mr-32 mt-14">
        <Image
          className="drop-shadow-xl"
          src={sideImage}
          alt="Image not found"
          width={500}
          height={300}
        ></Image>
      </div>
    </div>
  );
};

export default Homepage;
