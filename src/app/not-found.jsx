import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className="flex justify-center items-center h-screen md:bg-cover bg-no-repeat bg-contain" style={{ backgroundImage: "url('https://th.bing.com/th?id=OIP.zeNPNbcmNiwHlHBapcLdBAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')" }}>
            <h1 >Nothing is here </h1><br/>
            <Link href={"/"} className='underline text-red-700 hover:text-red-300 animate-bounce hover:no-underline ml-5'>Go To Hone</Link>
        </div>
    );
};

export default Page;