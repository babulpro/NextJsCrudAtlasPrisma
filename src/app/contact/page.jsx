import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Page = () => {
    return (
        <div className='container m-auto mt-6 mb-12'>
            <div className="h-auto bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left  ">
       <div className='w-full bg-red-400 rounded-md'>
        <h1 className='bg-[#1D232A] text-center'>Contact ith Us  </h1>
            <Image width={250} height={0} layout={"responsive"} src="/image/contact.jpg" alt="contact image" className='rounded-xl '/>
       </div>
    </div>
    <div className="  lg:w-1/2 w-full  shadow-2xl bg-base-100 rounded-lg lg:mr-10 ">
      <form className=" p-8">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Message</span>
          </label>
          <textarea placeholder="Write all about here" className="textarea textarea-bordered   w-full  " required /> 
        </div>
         
        <div className="form-control mt-4">
          <Link href={"/"} className="btn btn-primary">send</Link>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Page;