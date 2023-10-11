import crudMethods from "./crudMethods.js";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class userController extends crudMethods {
  _manipulateData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data.json"), {
      encoding: "utf-8",
    })
  ).users;

  _logFilePath = path.join(__dirname, "productslogFile.txt");
}

export default new userController();
