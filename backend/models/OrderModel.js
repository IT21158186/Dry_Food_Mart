import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    paymentId: {
        type: mongoose.Schema.ObjectId,
        ref: 'payment'
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["active", "completed","pending",""],
    },
    items: [
        {
            itemId: {
                type: mongoose.Schema.ObjectId,
                ref: 'items'
            }
        }
    ],

}, { timestamps: true });

const OrderModel = mongoose.model("order", OrderSchema);

export default OrderModel;