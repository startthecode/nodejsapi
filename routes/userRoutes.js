import  Express   from "express"
import user from "../controller/user.js";
let router = Express.Router()
export let routes = router
.post("/user/add", user.postMethod)
.get("/user/", user.getMethod)
.put("/user/:id", user.putMethod)
.patch("/user/:id", user.patchMethod)
.delete("/user/:id",user.deleteMethod )