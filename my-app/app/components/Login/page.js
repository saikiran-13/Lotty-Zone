'use client';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { Appcontext } from '@/app/layout';

const { ethers } = require('ethers');
const Login = () => {
  const route = useRouter();

  const { setSigner, setNetworkName } = useContext(Appcontext);

  async function connectMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = await provider.getSigner().getAddress();
    const networkId = (await provider.getNetwork()).chainId;

    if (networkId == '80001') {
      setNetworkName('Mumbai');
      localStorage.setItem('NetworkName', 'Mumbai');
    } else if (networkId == '11155111') {
      setNetworkName('Sepolia');
      localStorage.setItem('NetworkName', 'Sepolia');
    }
    localStorage.setItem('connectedAddress', signer);
    await setSigner(`${signer}`);
  }

  return (
    <div>
      <button
        className="text-white bg-blue-500 hover:bg-blue-600 px-10 py-5 text-xl rounded-lg font-bold shadow-slate-400 shadow-lg m-2 mt-20"
        onClick={async () => {
          await connectMetamask();
          route.push('/components/Buylottery');
        }}
      >
        Register Now
      </button>
    </div>
  );
};

export default Login;
