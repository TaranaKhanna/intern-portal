import express from 'express'
import { getInternData, getLeaderBoard } from '../controllers/intern.controller.js'

const router = express.Router();

router.get("/leaderboard", getLeaderBoard);
router.get("/:referralCode", getInternData);


export default router;