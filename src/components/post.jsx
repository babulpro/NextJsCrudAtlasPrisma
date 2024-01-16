'use client'
import React, { useState } from 'react';
import Modal from './Modal'
import axios from 'axios';
import {useRouter} from "next/navigation"

const Post = ({post}) => {

    const [openModalDelet,setOpenModalDelet]=useState(false)
    let [openModalEdit,setOpenModalEdit]=useState(false)
    const [postToEdit,setPostToEdit]= useState(post)
    const router =useRouter()

    const handleEditSubmit=(e)=>{
        e.preventDefault()
        axios.patch(`/api/post/${post.id}`,postToEdit).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
             
            setOpenModalEdit(false)
            router.refresh()
        })
    }
   
    

    const handleChange=(e)=>{
        const name =e.target.name;
        const value = e.target.value;
        setPostToEdit(prev=>({
            ...prev,[name]:value
        }))
    }
    

    const handleDeletePost=(id)=>{
        axios.delete(`/api/post/${id}`)
        .then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(err)
        }).finally(()=>{
            setOpenModalEdit(false);
            router.refresh()
        })

    }
    
    return (
        <div>
            <ul>
                <li className='p-3 my-5 bg-slate-900 ' key={post.id}>
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p>{post.description}</p>
                    <div className='pt-5'>


                     
      <button onClick={()=>setOpenModalEdit(true)} className='bg-blue-700 text-white p-3 cursor-pointer'>Edit</button>



                        <Modal modalOpen={openModalEdit} setmodalOpen = {setOpenModalEdit} >
                              <form className='w-full' onSubmit={handleEditSubmit}>  
                                <h1 className='text-2xl pb-3'>Add New Post</h1>     
                             <input type="text" placeholder="title"
                 name="title"
                 className="w-full p-2"
                value={postToEdit.title || ""}
                onChange={handleChange}
                />
                
                
                <input type="text" placeholder="Description" name="description" className="w-full p-2 my-5"
                value={postToEdit.description || ""}
                onChange={handleChange}
                />

                <button type="submit" className="bg-blue-700 text-white pc-5 py-2">Submit</button>

            </form>
           </Modal>
                        <button onClick={()=>setOpenModalDelet(true)} className="text-red-700 mr-5">delete</button>
                        <Modal modalOpen={openModalDelet} setmodalOpen={setOpenModalDelet} >
                            <h1 className="text-2xl pb-3">Are you sure to delete?</h1>
                            <div>
                                <button onClick={()=>handleDeletePost(post.id)} className="text-blue-700 font-bold mr-5">yes</button>


                                <button onClick={()=>setOpenModalDelet(false)}  className="text-blue-700 font-bold mr-5">no</button>
                            </div>

                        </Modal>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Post;