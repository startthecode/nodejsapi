import Express from "express";
import testing from "../controller/testing.js";
const routes = Express.Router();

export let tesingRoute = routes
  .get("/", testing.getMethod)
  .get("/posts", testing.getMethod2)
  .post("/", testing.postMethod)
  .delete("/delete/:id", testing.deleteMethod);

// .delete("/delete", testing.deleteMethod);
