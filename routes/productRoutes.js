import  Express   from "express"
import product from "../controller/product.js";
let router = Express.Router()
export let routes = router
.post("/product/add", product.postMethod)
.get("/product/", product.getMethod)
.put("/product/:id", product.putMethod)
.patch("/product/:id", product.patchMethod)
.delete("/product/:id",product.deleteMethod )