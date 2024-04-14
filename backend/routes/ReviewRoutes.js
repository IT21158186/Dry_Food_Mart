import express from 'express';
import { LoginValidator } from '../middlewares/LoggedIn.js';
import { createReview, getReviews, removeReview, updateReview } from '../controllers/ReviewController.js';

const reviewRouter = express.Router();

reviewRouter.post('/', LoginValidator, createReview );
reviewRouter.get('/', getReviews );
reviewRouter.delete('/:id', removeReview );
reviewRouter.put('/:id', updateReview);

export default reviewRouter;