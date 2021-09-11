import Router from "express";
import { getAll, createOne, getOneByID } from "../controllers/city.js";

const citiesRouter = Router();

citiesRouter.route("/").get(getAll).post(createOne);
citiesRouter.route("/:id").get(getOneByID);

export default citiesRouter;
