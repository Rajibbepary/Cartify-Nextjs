// import { clerkClient } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// const authSeller = async (userId) => {
//     try {

//         const client = await clerkClient()
//         const user = await client.users.getUser(userId)

//         if (user.publicMetadata.role === 'seller') {
//             return true;
//         } else {
//             return false;
//         }
//     } catch (error) {
//         return NextResponse.json({ success: false, message: error.message });
//     }
// }

// export default authSeller;


import { clerkClient } from "@clerk/nextjs/server";

const authSeller = async (userId) => {
    try {
        if (!userId) {
            return false;
        }

        const client = await clerkClient();

        const user = await client.users.getUser(userId);

        console.log("USER ROLE:", user.publicMetadata?.role);

        return user.publicMetadata?.role === "seller";
    } catch (error) {
        console.error("AUTH SELLER ERROR:", error);
        return false;
    }
};

export default authSeller;



