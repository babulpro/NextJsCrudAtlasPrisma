import React from 'react';
import Link from "next/link"
import Image from 'next/image';
import { getCard } from '@/lib/data';

const MyCard =async () => {

    const CardList = await getCard()
    
    return (
        <div className="grid md:grid-cols-3 md:gap-4 ">

            {
                CardList.map((value,index)=>{

                    return(
                        <div className="w-full shadow-2xl p-2 my-4">
                 <figure>
                    <Image width={350} height={100} layout='responsive' src={value.img} alt="Shoes" className='rounded-md p-1' />
                    </figure>
                 <div className="w-full my-5">
                     <h2 className="text-xl bold ">{value.title}!!</h2>
                     <p className='text-xs mt-2 mb-4'>{value.des}.</p>
                    <div className=" hover:animate-bounce mt-3">
                       <Link key={value.id} className="  rounded-md text-slate-300 hover:text-black px-4 py-1 bg-gradient-to-r from-pink-500 to-red-500 " href={`/blog/${value.id}`}>More about this</Link>
                    </div>
                 </div>
            </div>
                    )

                })
            }
            

            <div className="w-full shadow-2xl p-2 my-4">
                 <figure>
                    <Image width={350} height={100} layout='responsive' src="/image/blog.jpg" alt="Shoes" className='rounded-md p-1' />
                    </figure>
                 <div className="w-full my-5">
                     <h2 className="text-xl bold ">Technology !</h2>
                     <p className='text-xs mt-2 mb-4'>Transforming lives through innovative solutions, technology fuels progress and connectivity.</p>
                    <div className=" hover:animate-bounce mt-3">
                       <Link className="  rounded-md text-slate-600 hover:text-black px-4 py-1 bg-gradient-to-r from-pink-500 to-violet-500 " href={"/"}>Buy Now</Link>
                    </div>
                 </div>
            </div>


            <div className="w-full shadow-2xl p-2 my-4">
                 <figure>
                    <Image width={350} height={100} layout='responsive' src="/image/blog.jpg" alt="Shoes" className='rounded-md p-1' />
                    </figure>
                 <div className="w-full my-5">
                     <h2 className="text-xl bold ">Technology !!</h2>
                     <p className='text-xs mt-2 mb-4'>Transforming lives through innovative solutions, technology fuels progress and connectivity.</p>
                    <div className=" hover:animate-bounce mt-3">
                       <Link className="  rounded-md text-slate-600 hover:text-black px-4 py-1 bg-gradient-to-r from-pink-500 to-violet-500 " href={"/"}>Buy Now</Link>
                    </div>
                 </div>
            </div>





            <div className="w-full shadow-2xl p-2 my-4">
                 <figure>
                    <Image width={350} height={100} layout='responsive' src="/image/blog.jpg" alt="Shoes" className='rounded-md p-1' />
                    </figure>
                 <div className="w-full my-5">
                     <h2 className="text-xl bold ">Technology !!</h2>
                     <p className='text-xs mt-2 mb-4'>Transforming lives through innovative solutions, technology fuels progress and connectivity.</p>
                    <div className=" hover:animate-bounce mt-3">
                       <Link className="  rounded-md text-slate-600 hover:text-black px-4 py-1 bg-gradient-to-r from-pink-500 to-violet-500 " href={"/"}>Buy Now</Link>
                    </div>
                 </div>
            </div>






            <div className="w-full shadow-2xl p-2 my-4">
                 <figure>
                    <Image width={350} height={100} layout='responsive' src="/image/blog.jpg" alt="Shoes" className='rounded-md p-1' />
                    </figure>
                 <div className="w-full my-5">
                     <h2 className="text-xl bold ">Technology !!</h2>
                     <p className='text-xs mt-2 mb-4'>Transforming lives through innovative solutions, technology fuels progress and connectivity.</p>
                    <div className=" hover:animate-bounce mt-3">
                       <Link className="  rounded-md text-slate-600 hover:text-black px-4 py-1 bg-gradient-to-r from-pink-500 to-violet-500 " href={"/"}>Buy Now</Link>
                    </div>
                 </div>
            </div>




            <div className="w-full shadow-2xl p-2 my-4">
                 <figure>
                    <Image width={350} height={100} layout='responsive' src="/image/blog.jpg" alt="Shoes" className='rounded-md p-1' />
                    </figure>
                 <div className="w-full my-5">
                     <h2 className="text-xl bold ">Technology !!</h2>
                     <p className='text-xs mt-2 mb-4'>Transforming lives through innovative solutions, technology fuels progress and connectivity.</p>
                    <div className=" hover:animate-bounce mt-3">
                       <Link className="  rounded-md text-slate-600 hover:text-black px-4 py-1 bg-gradient-to-r from-pink-500 to-violet-500 " href={"/"}>Buy Now</Link>
                    </div>
                 </div>
            </div>




            
        </div>
    );
};

export default MyCard;