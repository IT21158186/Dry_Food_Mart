import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    itemId: {
        type: mongoose.Schema.ObjectId,
        ref: 'items'
    },

}, { timestamps: true });

const FavoriteModel = mongoose.model("favorites", FavoriteSchema);

export default FavoriteModel;