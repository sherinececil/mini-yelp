import Router from "express";
import { getAll, createOne, getOneByID } from "../controllers/restaurant.js";

const restaurantsRouter = Router();

restaurantsRouter.route("/").get(getAll).post(createOne);

restaurantsRouter.route("/:id").get(getOneByID);

export default restaurantsRouter;
