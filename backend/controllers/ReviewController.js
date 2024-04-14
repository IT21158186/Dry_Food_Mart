import ReviewModel from "../models/ReviewModel.js";

export const createReview = async (req, res) => {
    const userId = req.loggedInId;
    const {
        rate,
        review
    } = req.body;

    try {
        const newReview = await ReviewModel.create({
            userId,
            rate,
            review
        });

        return res.status(201).json(newReview);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export const getReviews = async (req, res) => {

    try {
        // Fetch marks data with populated student details based on the subject ID
        const Data = await ReviewModel.find()
        .populate({
            path: 'userId',
            model: 'users'  
        });
        res.status(200).json({ Data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const removeReview = async (req, res) => {
    try {
      const id = req.params.id;
  
      const removedCart = await ReviewModel.findByIdAndDelete(id);
  
      if (!removedCart) {
        return res.status(404).json({ error: "Not found" });
      }
      return res.status(204).send("Successfully deleted");
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };


  export const updateReview = async (req, res) => {
    try {
        const id = req.params.id;
        const Data = req.body;

        if (!id) {
            throw Error("Id can't be empty");
        }

        const updatedReview = await ReviewModel.findByIdAndUpdate( id, Data );
        res.status(200).json({ message: 'Review Updated Successfully', item: updatedReview });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}