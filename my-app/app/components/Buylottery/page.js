'use client';
import React from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Lotterycontract, Tokencontract } from '../ContractInstance/page';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import { Appcontext } from '../../layout';
import ticket from '../../../images/ticket.gif';
import owner from '../../../images/owner.png';
import '../../globals.css';

const Page = async () => {
  // const [count, setCount] = useState(0);
  const route = useRouter();

  const { setSigner, setNetworkName, setBalance, setWinnerAddress, setFlag } =
    useContext(Appcontext);

  useEffect(() => {
    const { ethereum } = window;

    ethereum.on('accountsChanged', async (accounts) => {
      console.log('Accounts', accounts[0]);
      localStorage.setItem('connectedAddress', accounts[0]);
      if (accounts.length == 0) {
        route.push('/');
      }
      setSigner(accounts[0]);
      await Lotterycontract();
    });

    ethereum.on('chainChanged', async (chain) => {
      console.log('Chain Id', chain);
      if (chain == '0x13881') {
        setNetworkName('Mumbai');
        localStorage.setItem('NetworkName', 'Mumbai');
      } else if (chain == '0xaa36a7') {
        setNetworkName('Sepolia');
        localStorage.setItem('NetworkName', 'Sepolia');
      }
      await Lotterycontract();
    });
  });

  async function getTicket() {
    const { tokenContract } = await Tokencontract();
    const { lotteryContract } = await Lotterycontract();
    const contractAddress = '0xfb8E8CBfefE45dC35B06d2548150062D5452f399';
    const ticketPrice = ethers.utils.parseEther('1');
    console.log(Number(ticketPrice));
    try {
      const trans = await tokenContract.approve(contractAddress, ticketPrice);
      await trans.wait();
      const ticket = await lotteryContract.getTicket(ticketPrice);
      await ticket.wait();
      toast.success('You have successfully received your ticket!!!', {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error) {
      if (`${error.message}`.includes('user rejected transaction')) {
        toast.error('You have rejected the transaction!!!', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  async function showbalance() {
    try {
      const { lotteryContract } = await Lotterycontract();
      const amount = Number(
        ethers.utils.formatEther(await lotteryContract.showBalance()),
      ).toString();
      setBalance(amount);
      setFlag(true);
      route.push('/components/DeclareWinner');
    } catch (error) {
      toast.error("You're Not The Owner!!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  async function findwinner() {
    const { lotteryContract, signerAddress } = await Lotterycontract();
    try {
      const trans = await lotteryContract.findWinner();
      await trans.wait();
      let Winner = await lotteryContract.winner();
      Winner = Winner.toString();
      console.log(Winner, typeof Winner);
      await setWinnerAddress(`${Winner.slice(0, 9)}.....`);
      setFlag(false);
      route.push('/components/DeclareWinner');
    } catch (error) {
      if (signerAddress == '0xe6A9D13D93CbA162A0fB46d338ADD071247910f3') {
        if (`${error.message}`.includes('user rejected transaction')) {
          toast.error('You have rejected the transaction!!!', {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.error('Minimum 3 Participants are required!!!', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      } else {
        toast.error("You're Not The Owner!!!", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  }

  return (
    <div className="flex justify-around place-content-center m-auto mb-24 w-full">
      <ToastContainer />
      <div className="drop-shadow-lg flex mt-14 ml-60 items-center">
        <Image
          className="m-auto"
          src={owner}
          alt="Image not found"
          width={300}
          height={200}
        ></Image>
      </div>
      <div className="shadow-blue-500 shadow-lg rounded-xl h-max flex flex-col m-auto mt-14 p-20 gap-5 justify-center ">
        <div className="flex m-auto flex-col ">
          <center>
            <b className="text-slate-500 font-bold text-xl">Lottery Price:</b>
          </center>
          <br></br>
          <input
            disabled={true}
            placeholder="1 SKT"
            className="h-10 text-center font-bold shadow-blue-500 shadow-sm"
          ></input>
          <button
            className="font-bold text-lg bg-blue-500 hover:bg-blue-600 px-16 py-3 mt-5 outline-none rounded-lg text-white"
            onClick={() => {
              getTicket();
            }}
          >
            GET TICKET
          </button>
        </div>

        <div className="m-auto ">
          <button
            className="font-bold text-lg bg-blue-500 hover:bg-blue-600 px-10 py-3 outline-none rounded-lg text-white"
            onClick={() => {
              showbalance();
            }}
          >
            SHOW BALANCE
          </button>
        </div>

        <div className="m-auto">
          <button
            className="font-bold text-lg bg-blue-500 hover:bg-blue-600 px-14 py-3 outline-none rounded-lg text-white"
            onClick={async () => {
              findwinner();
            }}
          >
            FIND WINNER
          </button>
        </div>
      </div>
      <div className="drop-shadow-lg flex mt-14 mr-40 items-center">
        <Image
          className="m-auto"
          src={ticket}
          alt="Image not found"
          width={400}
          height={200}
        ></Image>
      </div>
    </div>
  );
};

export default Page;
