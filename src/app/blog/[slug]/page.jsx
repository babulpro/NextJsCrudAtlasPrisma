import React from 'react';
import Image from "next/image"
import Users from "../../../components/SingleUser/Users"
import { getPost } from '@/lib/data';

const Page =async ({params}) => {

    // const MyItens=[
    //     {
    //         "id":"1",
    //         "img":"/image/blog1.jpg",
    //         "des":"Creative thoughts are the sparks that ignite innovation and bring imagination to life. They are the vibrant tapestry of unique ideas, often emerging from the intersection of diverse experiences. In the realm of creativity, boundaries dissolve, giving rise to fresh perspectives and unconventional solutions. Nurturing creative thoughts involves embracing curiosity, breaking free from conventional norms, and exploring the uncharted. It's a dynamic dance of ideas, where the mind weaves connections, transcending the ordinary to birth something extraordinary. Creative thoughts fuel artistic expression, technological breakthroughs, and novel concepts, enriching our collective tapestry with the colors of innovation. They inspire, challenge, and pave the way for transformative journeys that redefine the way we perceive and interact with the world. Nurturing creative thoughts involves embracing curiosity, breaking free from conventional norms, and exploring the uncharted. It's a dynamic dance of ideas, where the mind weaves connections, transcending the ordinary to birth something extraordinary. Creative thoughts fuel artistic expression, technological breakthroughs, and novel concepts, enriching our collective tapestry with the colors of innovation. They inspire, challenge, and pave the way for transformative journeys that redefine the way we perceive and interact with the world. Nurturing creative thoughts involves embracing curiosity, breaking free from conventional norms, and exploring the uncharted. It's a dynamic dance of ideas, where the mind weaves connections, transcending the ordinary to birth something extraordinary. Creative thoughts fuel artistic expression, technological breakthroughs, and novel concepts, enriching our collective tapestry with the colors of innovation. They inspire, challenge, and pave the way for transformative journeys that redefine the way we perceive and interact with the world."
    //     },
    //     {
    //         "id":"2",
    //         "img":"/image/blog2.jpg",
    //         "des":"Within the realm of creative thoughts, imagination dances freely, giving birth to unique and groundbreaking concepts. It is the realm where ideas flourish, unburdened by conformity, and innovation thrives. Creative thoughts spark the flame of curiosity, urging us to explore the unconventional, challenge assumptions, and reimagine the possible. In this dynamic space, creativity becomes the bridge between the known and the unknown, offering a canvas where experimentation and expression coalesce, fostering a culture of continual growth and discovery. Nurturing creative thoughts involves embracing curiosity, breaking free from conventional norms, and exploring the uncharted. It's a dynamic dance of ideas, where the mind weaves connections, transcending the ordinary to birth something extraordinary. Creative thoughts fuel artistic expression, technological breakthroughs, and novel concepts, enriching our collective tapestry with the colors of innovation. They inspire, challenge, and pave the way for transformative journeys that redefine the way we perceive and interact with the world. Nurturing creative thoughts involves embracing curiosity, breaking free from conventional norms, and exploring the uncharted. It's a dynamic dance of ideas, where the mind weaves connections, transcending the ordinary to birth something extraordinary. Creative thoughts fuel artistic expression, technological breakthroughs, and novel concepts, enriching our collective tapestry with the colors of innovation. They inspire, challenge, and pave the way for transformative journeys that redefine the way we perceive and interact with the world."
    //     },
    //     {
    //         "id":"3",
    //         "img":"/image/blog3.jpg",
    //         "des":"Creative thoughts are the kaleidoscopic fragments of the mind's capacity to innovate and envision beyond the familiar. They are the whispers of inspiration that encourage us to question, experiment, and transcend established norms. Like a symphony of ideas, creative thoughts harmonize disparate elements into a cohesive melody, opening doors to unexplored realms of imagination. Through their fluidity, creativity becomes a catalyst for progress, transforming challenges into opportunities and propelling us towards uncharted horizons. Nurturing creative thoughts involves embracing curiosity, breaking free from conventional norms, and exploring the uncharted. It's a dynamic dance of ideas, where the mind weaves connections, transcending the ordinary to birth something extraordinary. Creative thoughts fuel artistic expression, technological breakthroughs, and novel concepts, enriching our collective tapestry with the colors of innovation. They inspire, challenge, and pave the way for transformative journeys that redefine the way we perceive and interact with the world. Nurturing creative thoughts involves embracing curiosity, breaking free from conventional norms, and exploring the uncharted. It's a dynamic dance of ideas, where the mind weaves connections, transcending the ordinary to birth something extraordinary. Creative thoughts fuel artistic expression, technological breakthroughs, and novel concepts, enriching our collective tapestry with the colors of innovation. They inspire, challenge, and pave the way for transformative journeys that redefine the way we perceive and interact with the world."
    //     },
    // ]

    //  const items =MyItens.filter((value)=>{
    //   return  value.id === params.slug
    // })
    let items = await getPost(params.slug)
    

    return (
        <div className="md:w-2/3 m-auto">
            <div className="w-full bg-slate-400 shadow-xl border">
                <Users posts={items.id}/>
            </div>
            {/* <p>This is the slug page</p>

            <p>{params.slug}</p> */}
             
            <div className=" w-full bg-base-100 shadow-xl mb-8 mt-5">
                <figure className="px-10 pt-10 md:w-2/3 m-auto">
                     <Image width={350} height={100} layout='responsive' src={items.img} alt="Shoes" className="rounded-lg w-1/3 md:w-1/2"/>
                      
                     
                </figure>
                <div className="card-body items-center text-center">
                    <h1 className=" text-justify text-sm md:text-md  ">{items.title}</h1>
                    <p>{items.des}</p>
                     
     
                </div>
            </div>
        </div>
    );
};

export default Page;