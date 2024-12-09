import React from 'react'
import Image from "next/image"
import { BeakerIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-martinique-950 hidden lg:block'>
        {/* <---------Top Bar----------> */}
        <div className=" flex justify-between items-center px-3 bg-martinique-950 sm:px-3 mx-auto max-w-screen-2xl  text-slate-300 py-3 text-xs sm:text-sm">
        <div  className='flex justify-start px-0'>✓ Free Shipping On All Orders Over $50</div>
        <div>
          <ul className="flex justify-end gap-6 left-0">
            <li>Eng</li>
            <Link href={"./faq"}>Faqs</Link>
            <li>Need Help</li>
          </ul>
        </div>
        </div>
        {/* <-------------------------> */}

        {/* <-------Main navigation--------> */}
        <div className="bg-lightgray-100 flex justify-between items-center px-4 py-4 ">
         <div className='mx-auto max-w-screen-2xl space-x- gap-9 lg:flex-1 items-start flex justify-between '>
         
          {/* logo */}

          <div className='flex justify-between mx-auto max-w-screen-2xl items-start space-x-4'>
            <Image 
            src="/company-logo.png"
            alt="logo"
            className='h-9 w-auto'
            height={100}
            width={100}
            />
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5">
  
  <button className='bg-white text-black p-3 px-8 gap-2 flex justify-end rounded-md shadow-lg hover:scale-105 transition-all'>
  <ShoppingCartIcon className="h-6 w-8 text-black" /> 
  <p>Cart</p>
      
  </button>
          </div>
          </div>
        </div>
        {/* <--------------------------> */}

        {/* <----------menu items-----------> */}
        <div className='bg-white'>
        <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row justify-between items-center px-12 sm:px-16 md:px-4 lg:px-4 py-4 gap-3">
        <div className="flex justify-between lg:gap-x-6 items-start space-x-2 px-1 py-2">
        <ul className='flex justify-start gap-6 text-xs sm:text-sm md:text-base sm:px-1 items-start px-1 ' >
         <Link href={"/"} className='hover:text-easternblue-600 text-midgray-600 font-medium text-lg'>Home</Link>
         <Link href={"./card" }className='hover:text-easternblue-600 text-midgray-600 font-medium text-lg'>Shop</Link>
         <Link href={"./product"} className='hover:text-easternblue-600 text-midgray-600 font-medium text-lg'>Product</Link>
         <Link href={"./pages " }className='hover:text-easternblue-600 text-midgray-600 font-medium text-lg'>Pages</Link> 
         <Link href={"./about"} className='hover:text-easternblue-600 text-midgray-600 font-medium text-lg'>About</Link>
         <Link href={"./Contact"} className='hover:text-easternblue-600 text-midgray-600 font-medium text-lg'>Contact</Link>
         </ul> 
         
        </div>
        <h1 className='text-midgray-600 flex justify-end items-end  text-sm md:text-base'>Contact: (080)555-0111
        </h1>
        </div>

        </div>
       
    
    </div>
  )
}

export default Navbar
