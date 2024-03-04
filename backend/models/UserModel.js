import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    contactNo: {
        type: Number,
    },
    address: {
        type: String,
        default: 'Not Given'
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["customer", "teacher", "parent", "admin", "support", ""],
    }
}, { timestamps: true });

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;