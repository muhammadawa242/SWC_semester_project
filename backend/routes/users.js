import express from "express";
import {
  getUser,
  getUsersByName,
  getUsersByOccupation,
  getUsersByLocation,
  getUserFriends,
  addRemoveFollower,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.get("/:str/search_name", getUsersByName);
router.get("/:str/search_location", getUsersByLocation);
router.get("/:str/search_occupation", getUsersByOccupation);

/* UPDATE */
router.patch("/:userId/:personId", verifyToken, addRemoveFollower);

export default router;
