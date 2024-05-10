import express from "express";

const API_ROOT = '/api';

import { getRating, createRating, updateRating, deleteRating, getRatingByUserId } from "../controllers/ratings-controller.js";
import { getTimer, createTimer, updateTimer, deleteTimer, getTimerByUserId } from "../controllers/timer-controller.js";
import { createReview, getReview, getReviewByUserId, updateReview, deleteReview } from "../controllers/review-controller.js";


const router = express.Router();

router.post(`${API_ROOT}/rating`, createRating);
router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.get(`${API_ROOT}/rating/:userId`, getRatingByUserId);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);

router.post(`${API_ROOT}/timer`, createTimer);
router.get(`${API_ROOT}/timer/:userId/:movieId`, getTimer);
router.get(`${API_ROOT}/timer/:userId`, getTimerByUserId);
router.patch(`${API_ROOT}/timer/:id`, updateTimer);
router.delete(`${API_ROOT}/timer/:id`, deleteTimer);

router.post(`${API_ROOT}/review`, createReview);
router.get(`${API_ROOT}/review`, getReview);
router.get(`${API_ROOT}/review/:userId`, getReviewByUserId);
router.patch(`${API_ROOT}/review/:id`, updateReview);
router.delete(`${API_ROOT}/review/:id`, deleteReview);


export default router;
