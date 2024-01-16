import React from 'react';
import styles from "./Links.module.css";
import Image from "next/image"

const AboutPage = () => {
    return (
        <div  className='mb-11 mt-8'>
            <div className="  py-8 bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image width={100} height={100} src="https://www.easemytrip.com/travel/img/giethoorn.jpg" layout='responsive' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <p className='text-sm text-state-400'>About out creative thoughts.</p>
      <h1 className="text-4xl font-bold text-state-400">Unveiling Our Story</h1>
      <p className="py-6  text-xs text-state-400">Embark on a journey through the essence of Creative Thoughts Agency. Our story is one of passion, creativity, and relentless innovation. Discover the driving force behind our commitment to turning ideas into transformative experiences. Welcome to the heart of our creativity.</p>
      <div className='grid md:grid-cols-6 gap-2 mb-2 mt-2'>

      <div className='col-span-2 shadow-2xl mt-4 py-4 flex items-center justify-center' >
             <div>
             <h1 className="text-state-400 font-bold text-2xl ">10 k+</h1>
             <p className="text-[8px] text-state-500">Year of experience</p>
             </div>
           </div>

           <div className='col-span-2 shadow-2xl mt-4 py-4 flex items-center justify-center' >
             <div>
             <h1 className="text-state-400 font-bold text-2xl ">10 k+</h1>
             <p className="text-[8px] text-state-500">Year of experience</p>
             </div>
           </div>


           <div className='col-span-2 shadow-2xl mt-4 py-4 flex items-center justify-center' >
             <div>
             <h1 className="text-state-500 font-bold text-2xl ">10 k+</h1>
             <p className="text-[8px] text-state-500">Year of experience</p>
             </div>
           </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutPage;