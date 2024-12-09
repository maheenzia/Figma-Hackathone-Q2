import Image from 'next/image';



export default function SingleProduct() {
  return (
      <main className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          {/* Product Image */}
          <div className="rounded-lg overflow-hidden px-36 py-32">
            <Image
              src="/pinkchair.png"
              alt="Library Stool Chair"
              width={900}
              height={900}
              className="w-96 h-96 object-cover"
            />
          </div>

          {/* Product Details */}
          <div className='py-32 space-x-4 px-3'>
            <h1 className="text-6xl  py-9 gap-10 space-x-6 font-bold mb-4">Library Stool <br/>Chair</h1>
            <button className='px-7 py-3 rounded-full shadow-lg bg-easternblue-600 text-white
                 hover:scale-105 transition-all text-lg gap-4 font-medium tracking-wide'>$20.00 USD</button>
           
            <p className="mt-4 px-3 flex items-end text-gray-600 py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <button className='px-11 py-4 rounded-md shadow-lg bg-easternblue-600 text-white
                 hover:scale-105 transition-all text-lg gap-4 font-medium tracking-wide'>Add to Cart</button>
         
         
          </div>
        </div>
      </main>

      

  );
}
