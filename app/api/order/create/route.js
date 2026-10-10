

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import connectDB from "@/config/db";
import Product from "@/models/Product";
import User from "@/models/User";
import Order from "@/models/Order";

export async function POST(request) {
  try {
    // 1. Connect MongoDB
    await connectDB();

    // 2. Get logged-in Clerk user
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Please login first" },
        { status: 401 }
      );
    }

    // 3. Read request body
    const { address, items } = await request.json();

    if (
      !address ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid order data" },
        { status: 400 }
      );
    }

    // 4. Calculate total from MongoDB product prices
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      if (
        !item.product ||
        !Number.isInteger(item.quantity) ||
        item.quantity < 1
      ) {
        return NextResponse.json(
          { success: false, message: "Invalid product or quantity" },
          { status: 400 }
        );
      }

      const product = await Product.findById(item.product);

      if (!product) {
        return NextResponse.json(
          {
            success: false,
            message: `Product not found: ${item.product}`,
          },
          { status: 404 }
        );
      }

      subtotal += Number(product.offerPrice) * item.quantity;

      orderItems.push({
        product: String(product._id),
        quantity: item.quantity,
      });
    }

    // 5. Calculate 2% additional charge
    const amount = subtotal + Math.floor(subtotal * 0.02);

    // 6. Save order directly to MongoDB
    const order = await Order.create({
      userId: userId,
      items: orderItems,
      amount,
      address:
        typeof address === "string"
          ? address
          : JSON.stringify(address),
      status: "Order-Placed",
      date: Date.now(),
    });

    // 7. Clear cart if the MongoDB user exists
    const user = await User.findById(userId);

    if (user) {
      user.cartItems = {};
      await user.save();
    }

    // 8. Return saved order ID
    return NextResponse.json(
      {
        success: true,
        message: "Order placed successfully",
        orderId: order._id,
        amount: order.amount,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to place order",
      },
      { status: 500 }
    );
  }
}




// import { inngest } from "@/config/inngest";
// import Product from "@/models/Product";
// import User from "@/models/User";
// import { auth } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";


// export async function POST(request){
//     try{

//         const {userId} = await auth()
//         const {address, items} = await request.json();

//         if(!address || items.length === 0){
//             return NextResponse.json({success: false, message: 'Invalid data'})
//         }

//         const amount = await items.reduce(async(acc, item) =>{
//            const product = await Product.findById(item.product);
//            return await acc + product.offerPrice * item.quantity
//         },0)

//         await inngest.send({
//             name:'order/created',
//             data:{
//                 userId,
//                 address,
//                 items,
//                 amount: amount + Math.floor(amount * 0.02),
//                 date: Date.now()
//             }
//         })

//         const user = await User.findById(userId)
//         user.cartItems = {}
//         await user.save()
//         return NextResponse.json({success: true, message: 'Order Placed'})
//     } catch(error){
//         console.log(error)
//         return NextResponse.json({success:false, message: error.message})
//     }
// }