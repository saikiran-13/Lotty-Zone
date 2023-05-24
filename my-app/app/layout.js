'use client';
import './globals.css';
import { createContext, useEffect, useState } from 'react';

import { Inter } from 'next/font/google';
import Header from '@/app/components/Header/page';
import Footer from '@/app/components/Footer/page';

const inter = Inter({ subsets: ['latin'] });

export const Appcontext = createContext();
export default function RootLayout({ children, connect }) {
  const [balance, setBalance] = useState('');
  const [WinnerAddress, setWinnerAddress] = useState('');
  const [flag, setFlag] = useState(true);
  const [signer, setSigner] = useState('');
  const [networkName, setNetworkName] = useState('');

  return (
    <html lang="en">
      <body className="bg-white">
        <Appcontext.Provider
          value={{
            balance,
            WinnerAddress,
            flag,
            signer,
            networkName,
            setSigner,
            setNetworkName,
            setFlag,
            setBalance,
            setWinnerAddress,
          }}
        >
          <Header />

          <div className="flex-grow">{children}</div>

          <Footer />
        </Appcontext.Provider>
      </body>
    </html>
  );
}
