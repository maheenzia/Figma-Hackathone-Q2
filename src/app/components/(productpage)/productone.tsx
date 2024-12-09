import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

export default function Productpage() {
  const FeatureImage = [
    '/whitechair.png',
    '/pinkchair.png',
    '/orangesofa.png',
    '/stoolchair.png',
    '/darkgray.png',
    '/coushionchair.png',
    '/woodenchair.png',
    '/pinkchair.png',
    '/darkgreen.png'

  ];

  return (
    <div className="max-w-screen-2xl mx-auto py-14" >

      <div>
        <h1 className="text-xl  md:text-4xl font-bold mb-8 pl-4 ">All Product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 h-auto py-6">
          {FeatureImage.map((val, i) => (
         <div key={i} className="flex flex-col w-96 h-auto items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <Link href={`./Productpage/${i}`}>
           <div className="w-full h-64 overflow-hidden">
                 <Image
                  src={val}
                  alt={`whitechair${i}`}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
              </div>
              <div className="flex justify-between w-full px-4 py-2">
                <div className="flex flex-col items-start">
                  <h2 className="font-medium text-lg mb-1">Library Stone Chair</h2>
                  <span className="text-black text-lg font-bold">$20</span>
                </div>
            <div className="flex items-center" >
                  <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-easternblue-600 cursor-pointer transition-transform duration-300 hover:scale-110" />
                </div>
              </div></Link> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}