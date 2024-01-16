import prisma from "@/app/mongoLip/prismadb"
import { NextResponse } from "next/server"

export const POST = async(request)=>{
    try{
        const body = await request.json()
        const {title,description} =body
        const newPost = await prisma.post.create({
            data:{
                title,
                description
            }
        }) 
        return NextResponse.json(newPost)
         
    }
    catch(err){

        return NextResponse.json({mas:"something is wrong"})
    }
}

// export const POST =async (request)=>{
//    try{
//     let body = await request.json()
//     const {title,description}=body
//     const newPost = await prisma.post.create({
//         data:{
//             title,
//             description
//         }
//     })
//     return NextResponse.json(newPost)
//    }
//    catch(e){
//     return NextResponse.json({msg:"something went wrong"})
//    }
// }


export const GET = async()=>{
    try{
        const post = await prisma.post.findMany()
       
        return NextResponse.json(post)
         
    }
    catch(err){

        return NextResponse.json({mas:"something is wrong"})
    }
}