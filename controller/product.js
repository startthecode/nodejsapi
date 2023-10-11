import crudMethods from "./crudMethods.js";
import fs from "fs";

class productController extends crudMethods {
  _manipulateData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data.json"), {
      encoding: "utf-8",
    })
  ).products;

  _logFilePath = path.join(__dirname, "productslogFile.txt");
}

export default new productController();
