

import {User} from "./models";
import {connectToDB} from "./utils";      
export const fetchUsers = async () => {
    try {
       await connectToDB();
        const users = await User.find();
        return users;
    } catch (err) {
        console.error("Error fetching users:", err);
        // throw new Error("Failed to fetch users"); // REerr; // Re-throw the original error or handle it appropriately
    }
}