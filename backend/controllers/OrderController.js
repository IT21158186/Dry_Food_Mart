import CartModel from "../models/CartModel.js";
import OrderModel from "../models/OrderModel.js";
import PaymentModel from "../models/PaymentModel.js";

export const createOrder = async (req, res) => {
    const status = 'pending';
    const {
        items,
        price,
        email,
        cardNo,
        mm,
        yy,
        name

    } = req.body;
    const userId = req.loggedInId;
    try {

        const newPayment = await PaymentModel.create({
            userId,
            price,
            email,
            cardNo,
            mm,
            yy,
            name
        });
        const paymentId = newPayment._id;

        const newOrder = await OrderModel.create({
            userId,
            paymentId,
            status,
            items,
            price
        });

        return res.status(201).json("Order Complete", newOrder , newPayment);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getAllOrders = async (req, res) => {
    try {
        const Orders = await OrderModel.find()
            .populate({
                path: 'items.itemId',
                model: 'items'  
            })
            .populate({
                path: 'userId',
                model: 'users'  
            })
            .populate({
                path: 'paymentId',
                model: 'payment'  
            });

        res.status(200).json(Orders);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const getallByUser = async (req, res) => {
    try {
        const userId = req.loggedInId;
        const Products = await OrderModel.find({ userId: userId })
        res.status(200).json(Products);
    } catch (error) {
        res.status(500).json({
            message: error.mesasge
        })
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            throw Error("Id can't be empty");
        }
        const deletedOrder = await OrderModel.findByIdAndDelete(id);
        const deletedPayment = await PaymentModel.findByIdAndDelete(deletedOrder.paymentId);
        res.status(200).json({ message: 'Order Deleted Successfully', item:deletedPayment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateOrder = async (req, res) => {
    try {
        const id = req.params.id;
        const Data = req.body;

        if (!id) {
            throw Error("Id can't be empty");
        }

        const updatedOrder = await OrderModel.findByIdAndUpdate( id, Data );
        res.status(200).json({ message: 'Order Updated Successfully', item: updatedOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}