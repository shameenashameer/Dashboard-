
import { revalidatePath } from "next/cache";
import {User} from "./models"
import {connectDB} from "./utils"
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";


export const addUser=async (formData)=>{
    "use server"
const {username,email,password,phone,address,isAdmin,isActive}=Object.fromEntries(formData);

try{


    connectDB()

    const salt=await bcrypt.genSalt(10)
    const hashadPassword=await bcrypt.hash(password,salt)

    const newUser=new User({
        username,
        email,
        password:hashadPassword,
        phone,
        address,
        isAdmin,
        isActive
    })

    await newUser.save();

}catch(err){
    console.log(err);
    // throw new Error("Failed to create user")
}

revalidatePath("/dashboard/users")
redirect("/dashboard/users")
}