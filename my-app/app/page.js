'use client';
import { createContext, useState } from 'react';
import Homepage from './components/Homepage/page';
export const Appcontext = createContext();
export default function Home() {
  return (
    <main>
      <Homepage />
    </main>
  );
}
