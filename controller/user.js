import crudMethods from "./crudMethods.js";
import fs from "fs";

class userController extends crudMethods {
  _manipulateData = JSON.parse(
    fs.readFileSync("F:/coding/Back-End development/express-js/data.json", {
      encoding: "utf-8",
    })
  ).users;

  _logFilePath = "F:/coding/Back-End development/express-js/userslogFile.txt";
}

export default new userController();
