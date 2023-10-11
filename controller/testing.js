import { dataBase } from "../db.js";
import crudMethods from "./crudMethods.js";

class testing {
  getMethod = (req, res) => {
    res.sendFile("F:/coding/Back-End development/express-js/public/index.html");
  };

  getMethod2 = (req, res) => {
    let sql = "SELECT * FROM posts";
    dataBase.query(sql, (err, data) => {
      if (err) console.log(err);
      res.render("F:/coding/Back-End development/express-js/public/dummy.ejs", {
        posts: data,
      });
    });
  };

  postMethod = (req, res) => {
    let { blogTitle, blog } = req.body;
    if (!blogTitle && !blog) return;
    let sql = `insert into posts(title,body,createdAt) values('${blogTitle}', '${blog}',now())`;
    // console.log(dataBase);
    dataBase.query(sql, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });

    res.redirect("/api/testing/posts");
  };

  deleteMethod = (req, res) => {
    let del = req.params;
    if (del.id) {
      let sql = `delete from posts where pk = ${del.id}`;
      dataBase.query(sql, (err, rows) => {
        if (err) {
          res.status(404).send("Wrong api id");
        } else {
          res.status(200).send("rows");
          console.log(rows);
        }
      });
    } else {
      res.status(404).send("Wrong api id");
    }
  
  };
}

export default new testing();
