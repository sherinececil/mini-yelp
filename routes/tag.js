import Router from "express";
import { getAll, createOne, getOneByID } from "../controllers/tag.js";

const tagsRouter = Router();

tagsRouter.route("/").get(getAll).post(createOne);
tagsRouter.route("/:id").get(getOneByID);

export default tagsRouter;
