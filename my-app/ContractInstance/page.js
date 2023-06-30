'use client';
import { abi as contractabi } from '../abi/abi';
import { tokenabi } from '../abi/token';
import { ethers } from 'ethers';

// const { ethers } = require('ethers');
export async function Lotterycontract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const network = await provider.getNetwork();
  const chain = network.chainId;
  console.log(chain);
  const signerAddress = await signer.getAddress();
  const contractAddress = '0xfb8E8CBfefE45dC35B06d2548150062D5452f399';
  const lotteryContract = new ethers.Contract(
    contractAddress,
    contractabi,
    signer,
  );

  return { signerAddress, chain, signer, lotteryContract };
}

export async function Tokencontract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();
  const contractAddress = '0x975C2bc54EA2e560E86845F2559d651E78F9ee41';
  const tokenContract = new ethers.Contract(contractAddress, tokenabi, signer);
  return { signerAddress, signer, tokenContract };
}

module.exports = {}