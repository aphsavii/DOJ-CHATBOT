import { Router } from "express";

// Controllers import
import { queryController } from "../controllers/query.controller.js";

const queryRouter = Router();

queryRouter.post("/query",queryController);

export {queryRouter}