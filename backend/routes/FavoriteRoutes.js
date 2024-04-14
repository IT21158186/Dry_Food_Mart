import express from 'express';
import { createFavorite, getFavorites, removeFavorite } from '../controllers/favoriteController.js';
import { LoginValidator } from '../middlewares/LoggedIn.js';

const favoruteRouter = express.Router();

favoruteRouter.post('/:id', LoginValidator, createFavorite);
favoruteRouter.get('/', LoginValidator, getFavorites);
favoruteRouter.delete('/:id', removeFavorite);

export default favoruteRouter;