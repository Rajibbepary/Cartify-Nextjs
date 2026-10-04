
import connectDB from "@/config/db";
import authSeller from "@/lib/authSeller";
import Product from "@/models/Product";
import { auth } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

//configure cloudinary

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


export async function POST(request){

    
    try{

       const ping = await cloudinary.api.ping();
        console.log("🔥 CLOUDINARY PING:", ping)
        const {userId} = await auth()

        const isSeller = await authSeller(userId)

        if(!isSeller){
            return NextResponse.json({success: false, message: 'not authorized'})
        }

        const formData = await request.formData()

        const name = formData.get('name');
        const description = formData.get('description');
        const category = formData.get('category');
        const price = formData.get('price');
        const offerPrice = formData.get('offerPrice');

        const files = formData.getAll('image');

        if(!files || files.length === 0){
            return NextResponse.json({success: false, message: 'no files uploaded'})
        }
        const result = await Promise.all(
           files.map(async (files) =>{
            const arrayBuffer = await files.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer)

            return new Promise((resolve, reject)=>{
                const stream = cloudinary.uploader.upload_stream(
                  {resource_type: 'image'} ,
                  (error, result) => {
                    if(error){
                        reject(error)
                        console.log("🔥 CLOUDINARY ERROR MESSAGE:", error.message);
                        console.log("🔥 CLOUDINARY ERROR CODE:", error.http_code);
                        console.log("🔥 CLOUDINARY FULL ERROR:", error);
                        
                    }else{
                        resolve(result)
                        console.log('cloudinary success', result)
                    }
                  } 
                )
                stream.end(buffer)
            })
           }) 
        )

    
      const image = result.map(result => result.secure_url) 

      await connectDB()

      const newProduct = await Product.create({
        userId,
        name,
        description,
        category,
        price:Number(price),
        offerPrice:Number(offerPrice),
        image,
        date: Date.now()

      })

      return NextResponse.json({success: true, message: 'Upload successful', newProduct})

    }catch(error){
        console.log(error);
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
        }
}