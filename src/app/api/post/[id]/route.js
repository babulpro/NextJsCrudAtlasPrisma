import prisma from "@/app/mongoLip/prismadb"
import { NextResponse } from "next/server"


export const GET=async(request,{params})=>{
    try{
        const { id }= params;
        const post = await prisma.post.findUnique(
            {
                where:{
                    id
                }
            }
        )
        if(!post){
            return NextResponse.json({
                message:"post not found"
            })
        }
        return NextResponse.json(post)
    }
    catch(err){
        return NextResponse.json({msg:"Get Error"})
    }
}



export const DELETE = async(request,{params})=>{
    try{
        
        const {id} =params
         await prisma.post.delete({
            where:{
                id
            }
        }) 

       
        return NextResponse.json({msg:"Post has been deleted successfully"})
         
    }
    catch(err){

        return NextResponse.json({mas:"something is wrong"})
    }
}
export const PATCH = async(request,{params})=>{
    try{
        const body = await request.json()
        const {title,description} =body
        const {id} =params
        const newPost = await prisma.post.update({
            where:{
                id
            },
            data:{ 
                title,
                description
            }
        }) 

        if(!newPost){
            return NextResponse.json(
                {
                    msg:"Data not found"
                }
            )
        }
        return NextResponse.json(newPost)
         
    }
    catch(err){

        return NextResponse.json({mas:"something is wrong"})
    }
}
