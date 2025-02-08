import express from "express";
const app = express();
app.use(express.json());
app.listen(3000);
let data = [];

app.get("/", (req, res) => {
  res.send({
    message: "server runing",
  });
});

app.get("/login", (req, res) => {
  console.log(req);
  res.send({
    message: "you are login page",
  });
});

app.post("/register", (req, res) => {
  //   const email = req.body.email;
  //   const password = req.body.password;
  console.log(req.body);
  res.send({
    message: "register page",
    // data: {
    //   email: email,
    //   password: password,
    // },
  });
});
