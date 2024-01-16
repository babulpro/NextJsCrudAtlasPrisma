
'use client'
import axios from 'axios';
import React, { useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';

const AddPost = () => {
    const router = useRouter()
    const [modalOpen,setmodalOpen] = useState(false)
    const [inputs,setInputs]=useState({})

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('/api/post',inputs).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setInputs({})
            setmodalOpen(false)
            router.refresh()
        })
    }

    const handleChange=(e)=>{
        const name =e.target.name;
        const value = e.target.value;
        setInputs(prev=>({
            ...prev,[name]:value
        }))
    }
    return (
        <div>
           <button onClick={()=>setmodalOpen(true)} className='bg-blue-700 text-white p-3 cursor-pointer'>Add New Post</button>
           
           <Modal modalOpen={modalOpen} setmodalOpen = {setmodalOpen} >
            <form className='w-full' onSubmit={handleSubmit}>  
                <h1 className='text-2xl pb-3'>Add New Post</h1>     
                <input type="text" placeholder="title"
                 name="title"
                 className="w-full p-2"
                value={inputs.title || ""}
                onChange={handleChange}
                />
                
                
                <input type="text" placeholder="Description" name="description" className="w-full p-2 my-5"
                value={inputs.description || ""}
                onChange={handleChange}
                />

                <button type="submit" className="bg-blue-700 text-white pc-5 py-2">Submit</button>

            </form>
           </Modal>
        </div>
    );
};

export default AddPost;