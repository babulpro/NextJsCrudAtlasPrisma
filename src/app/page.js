 import React from 'react';
 import Image from 'next/image';
import Link from 'next/link';
 
 const Page = () => {
  return (
     <div className='mt-10 mb-12'>
            <div className="p-8">
  <div className="grid md:grid-cols-10 md:gap-3 ">
    <div  className='col-span-6 flex justify-center items-center'>
        <div className=''>
          <Image src="/image/img.png" width={100} height={150} layout='responsive' className="max-w-[200px] max-h-[250px] rounded-lg shadow-2xl" />
          

        </div>

    </div>
    <div className='col-span-4 p-8 md:p-2 '>
      <h1 className="text-4xl font-bold">Creative Thoughts Agency</h1>
      <p className="py-6 text-md">Creative Thoughts Agency: Where ideas come to life. We blend innovation with expertise, crafting unique solutions that leave a lasting impact. From design to development, we bring your visions to reality with creativity and excellence</p>
      <div >
      <Link href={"/"} className=" px-3 py-1 rounded-md bg-[#3253b6] hover:bg-[#667cc0] text-black mr-3">Learn More</Link>
      <Link href={"/"} className=" px-3 py-1 rounded-md bg-[#3253b6] hover:bg-[#667cc0] text-black mr-3">Contact</Link>
       
      </div>
    </div>
  </div>
</div>
     </div>
  );
 };
 
 export default Page;