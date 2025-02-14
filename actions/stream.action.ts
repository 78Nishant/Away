"use server"
import { ClerkProvider } from "@clerk/clerk-react";
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";


const apikey= process.env.NEXT_PUBLIC_CLERK_API_KEY;
const apiSecret=process.env.STREAM_SECRET_KEY;

export const tokenProvider=async()=>{
    const user=await currentUser();

    if(!user){
        throw new Error('User not logged in');
    }
    if(!apikey){    
        throw new Error('Clerk API Key is missing');
    }
    if(!apiSecret){
        throw new Error('Stream Secret Key is missing');
    }

    const client=new StreamClient(apikey,apiSecret)

    const exp=Math.round(new Date().getTime()/1000)+3600;
    const issuedAt=Math.floor(new Date().getTime()/1000)-60;

    const token=client.generateUserToken({"user_id":user.id,"validity":exp,"issued_at":issuedAt})
    return token;
}