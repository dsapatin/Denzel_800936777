const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/assets"));
app.use(express.static(path.join(__dirname, "public")));

const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

app.listen(3000, () => { 
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => { 
    // res.send("Hello world...");
    res.render("index");
  });

  app.get("/login", (req, res) => { 
    res.render("./admin/login");
  });
  app.get("/update_user", (req, res) => { 
    res.render("./admin/update_user");
  });
  app.get("/update_post", (req, res) => { 
    res.render("./admin/update_post");
  });
  app.get("/read_post", (req, res) => { 
    res.render("./admin/read_post");
  });
  app.get("/list_user", (req, res) => { 
    res.render("./admin/list_user");
  });
  app.get("/list_post", (req, res) => { 
    res.render("./admin/list_post");
  });
  app.get("/add_user", (req, res) => { 
    res.render("./admin/add_user");
  });
  app.get("/add_post", (req, res) => { 
    res.render("./admin/add_post");
  });

