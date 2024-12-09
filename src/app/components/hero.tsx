import React from 'react'
import Image from "next/image"




const Hero = () => {
  return (
    <>
    
       <div className= " ">
      <div className="max-w-screen-2xl mx-auto space-x-2">
    
      
       
          <div className='bg-lightgray-100 container md:pt-16 md:pb-16'>
            {/* <================> */}
            <div className="grid grid-cols-2">
              {/* <=================> */}
              <div className="space-y-6 md:space-y-4 py-56 px-6 text-left">
              <p className=' items-center px-11 font-medium text-midgray-800 text-lg '>
                 WELCOME TO CHAIRY
                </p>

                <h1 className=' md:text-9xl px-11  gap-6 font-extrabold leading-tight text-left  text-gray-900 lg:text-6xl'>
                  Best Furniture <br/> Collection For Your <br/>Interior.{" "}
                   </h1>
                
                {/* <==================> */}
               <div className="px-11 py-9">
               <button className='px-7 py-4 rounded-md shadow-lg bg-easternblue-600 text-white
                 hover:scale-105 transition-all text-lg gap-4 font-medium tracking-wide'>Shop Now →</button>
               </div>
               {/* <===================> */}
 
              </div>
              {/* <================> */}
              <div className=" flex just md:justify-endify-center px-40 py-24 ">
              <Image alt="hero" src="/hero.png" width={500} height={500} 
              className='object-contain'/>
              
              
              </div>
              {/* <=============> */}
            </div>
        

              </div>
              {/* <=============> */}
            </div>

 
   
    
    

  </div>
             
      
    </>
   
    
  )
}

export default Hero;