import crudMethods from "./crudMethods.js";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __rootpath = dirname(__dirname);

class userController extends crudMethods {
  _manipulateData = JSON.parse(
    fs.readFileSync(path.join(__rootpath, "/data.json"), {
    // fs.readFileSync('F:/coding/Back-End development/express-js/data.json', {

      encoding: "utf-8",
    })
  ).users;

  _logFilePath = path.join(__rootpath, "/productslogFile.txt");
}

export default new userController();
