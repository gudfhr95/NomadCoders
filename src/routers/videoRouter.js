import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpdload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpdload);

export default videoRouter;
