import { getUser } from '@/lib/data';
import React from 'react';
 

// const getData= async (userId)=>{
//     let res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     if(!res.ok){
//         throw new error ("something went wrong")
//     }
//     return res.json()
// }


const Users = async ({posts}) => {
    const myData =  await getUser(posts)
    return (
        <div>
            <p>{myData.name}</p>
            <p>{myData.email}</p>
             
        </div>
    );
};

export default Users;