// Import express and the Movie model
import express from 'express';
import Movie from '../models/movieModel.js';

// Create a new Express Router
const router = express.Router();

// POST route to create a new movie
router.post('/', async (req, res) => {
    try {
        // Log incoming data for testing
        console.log(req.body);

        // Destructure movie data from request body
        const { title, director, year, genre, rating } = req.body;

        // Validate all fields are present
        if (!title || !director || !year || !genre || rating == null) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new movie document
        const newMovie = new Movie({
            title,
            director,
            year,
            genre,
            rating,
        });

        // Save to MongoDB
        const savedMovie = await newMovie.save();

        // Return the saved movie
        res.status(201).json(savedMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Export router
export default router;
