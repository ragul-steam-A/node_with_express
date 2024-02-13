const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

//post api

app.post("/postApi", (req, res) => {
  console.log("POST API");
  res.status(200).json({
    msg: "Post request",
    user_name: req.body.name,
    user_age: req.body.age,
  });
});

//get api with middleware

app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("GET WITH MIDDLEWARE");
    if (req.params.id == 10) {
      next();
    } else {
      res.status(403).json({ msg: "Access Denied" });
    }
  },
  (req, res) => {
    res.status(200).json({ msg: "Get Request" });
  }
);

//put api

app.put("/put", (req, res) => {
  console.log("PUT REQUEST");
  const { name, pass } = req.body;
  console.log(name, pass);
  res.status(200).json({ msg: "updated succefully" });
});

//delete api

app.delete("/delete", (req, res) => {
  console.log("delete API");
  res.status(200).json({ msg: "delete Api" });
});

//patch api

app.patch("/patch", (req, res) => {
  console.log("patch API");
  const age = req.body;
  res.status(200).json({ msg: "patch successful" });
});

app.listen(PORT, () => {
  console.log(`connected at http://localhost:${PORT}`);
});
