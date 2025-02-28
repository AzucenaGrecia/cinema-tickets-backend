import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	userName: String,
	userEmail: String,
	
});

const User = mongoose.model("User", userSchema);
export default User;
