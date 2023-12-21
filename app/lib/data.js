import { User } from "./models";
import { connectDB } from "./utils";
export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
  try {
    await connectDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    
    const users = await User.find({ username: { $regex: regex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.error("Error fetching users:", err);
  }
};
