import Express from "express";
import { routes as productRoutes } from "./routes/productRoutes.js";
import { routes as userRoutes } from "./routes/userRoutes.js";
import mysql from "mysql";
import product from "./controller/product.js";
import user from "./controller/user.js";
import { tesingRoute } from "./routes/testRoutes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import "dotenv/config";
let port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let server = Express();
server.listen(port, () => {
  console.log("server stated on port " + port);
});
server.use(Express.json());
server.use(Express.static(path.join(__dirname, "public")));
server.use(Express.urlencoded({ extended: true }));
server.set("view engine", "ejs");

// server.use("/api/product", product._updateLogFIle);
// server.use("/api/user", user._updateLogFIle);
server.use("/api/", productRoutes);
server.use("/api/", userRoutes);
server.use("/api/testing/", tesingRoute);

console.log(__dirname);
