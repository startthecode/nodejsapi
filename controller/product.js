import crudMethods from "./crudMethods.js";
import fs from "fs";

class productController extends crudMethods {
  _manipulateData = JSON.parse(
    fs.readFileSync("F:/coding/Back-End development/express-js/data.json", {
      encoding: "utf-8",
    })
  ).products;

  _logFilePath = "F:/coding/Back-End development/express-js/productslogFile.txt";
}

export default new productController();
