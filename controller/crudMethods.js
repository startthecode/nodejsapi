import fs from "fs";
class crudMethods {
  _manipulateData;
  _logFilePath;

  postMethod = (req, res) => {
    let newProduct = req.body;
    this._manipulateData.push(newProduct);
    res.status(200).json(newProduct);
  };

  getMethod = (req, res) => {
    console.log(this._manipulateData);
    res.json(this._manipulateData);
  };

  putMethod = (req, res) => {
    let productUpdate = this._manipulateData.findIndex(
      (valID) => valID.id == req.params.id
    );
    this._manipulateData.splice(productUpdate, 1, {
      ...req.body,
      id: req.params.id,
    });
    res.json(this._manipulateData);
  };

  patchMethod = (req, res) => {
    let productUpdate = this._manipulateData.findIndex(
      (valID) => valID.id == req.params.id
    );
    let product = this._manipulateData[productUpdate];
    this._manipulateData.splice(productUpdate, 1, { ...product, ...req.body });
    console.log({ ...req.body });
    res.json(product);
  };

  deleteMethod = (req, res) => {
    let productUpdate = this._manipulateData.findIndex(
      (valID) => valID.id == req.params.id
    );
    this._manipulateData.splice(productUpdate, 1);
    res.json(this._manipulateData);
  };

  _updateLogFIle = (req, res, next) => {
    fs.appendFile(
      this._logFilePath,
      `\n \n ${req.get("Sec-Ch-Ua")} ${new Date()} `,
      "utf-8",
      (err) => {
        if (err) console.log("err");
        next();
      }
    );
  };
}

export default crudMethods;
