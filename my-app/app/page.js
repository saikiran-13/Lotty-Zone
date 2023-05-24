'use client';
import Image from 'next/image';
import Link from 'next/link';
import RootLayout from './layout';
import { createContext, useState } from 'react';
import Homepage from './components/Homepage/page';
import Page from './components/Buylottery/page';

export const Appcontext = createContext();
export default function Home() {
  return (
    <main>
      <Homepage />
    </main>
  );
}
