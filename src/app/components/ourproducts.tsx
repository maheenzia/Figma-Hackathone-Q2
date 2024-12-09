import Image from 'next/image';
import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

export default function OurProduct() {
  const FeatureImage = [
    '/whitechair.png',
    '/pinkchair.png',
    '/orangesofa.png',
    '/whitesofa.png',
    '/lightgray.png',
    '/darkgray.png',
    '/coushionchair.png',
    '/whitechair.png',
  ];

  return (
    <div className="max-w-screen-2xl mx-auto py-10" >

      <div>
        <h1 className="text-2xl  md:text-3xl font-bold mb-4 pl-4 text-center">Our Product</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {FeatureImage.map((val, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="w-full h-auto overflow-hidden">
                <Image
                  src={val}
                  alt={`Sofa${i}`}
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
                <div className="flex items-center">
                  <FaCartShopping className="w-6 h-6 sm:w-8 sm:h-8 text-easternblue-600 cursor-pointer transition-transform duration-300 hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}