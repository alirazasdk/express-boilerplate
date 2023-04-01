import express from "express";
import authenticate from "../middleware/authenticate.js";

// routes
import userRoute from "./user/index.js";
import streamRoute from "./stream/index.js";
import episodeRoute from "./episode/index.js";
import genreRoute from "./genre/index.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/user", userRoute);
// protectedRouter.use("/stream",authenticate, streamRoute);
// protectedRouter.use("/episode",authenticate, episodeRoute);
protectedRouter.use("/genre",authenticate, genreRoute);

export { protectedRouter, unProtectedRouter };
