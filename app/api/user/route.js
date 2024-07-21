import { ConnectDB } from "@/lib/config/db";
import UserModel from "@/lib/models/UserModel";
import { NextResponse } from "next/server";

const LoadDB = async () =>{
    await ConnectDB();
}
LoadDB();

export async function POST(request){
    const formData = await request.formData();
    const userData = {
        fullName: `${formData.get('fullName')}`,
        username: `${formData.get('username')}`,
        email: `${formData.get('email')}`,
        password: `${formData.get('password')}`,
    }
    await UserModel.create(userData);
    return NextResponse.json({success:true,msg:"User Details Added"})
}