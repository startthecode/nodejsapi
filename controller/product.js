import crudMethods from "./crudMethods.js";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __rootpath = dirname(__dirname);

class productController extends crudMethods {
  _manipulateData = JSON.parse(
    fs.readFileSync(path.join(__rootpath, "/data.json"), {
      encoding: "utf-8",
    })
  ).products;

  _logFilePath = path.join(__rootpath, "/productslogFile.txt");
}

export default new productController();
