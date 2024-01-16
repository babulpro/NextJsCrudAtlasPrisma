import AddPost from '@/components/AddPost';
import PostList from '@/components/PostList';
import React from 'react';


const getData= async ()=>{
    const res = await fetch("http://localhost:3000/api/post",{ cache: 'no-store' })
    if(!res.ok){
        throw new Error("failed to fetch data ")
    }
    return res.json()
}

const  Crud=async () => {
    const posts = await getData()
     
    return (
        <div>
           <div className=' max-w-4xl mx-aut mt-4'>
            <div className='my-5 flex flex-col gap-4 '>
                <h1 className='text-3xl font-bold'>Todo List</h1>
                <AddPost/>

            </div>
            <PostList posts={posts}/>

           </div>
        </div>
    );
};

export default Crud;