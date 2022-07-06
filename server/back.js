const exp = require("express");
const app = exp();

const cors = require("cors");
app.use(cors());
app.use(exp.json());

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://40@cluster0.qvjgby3.mongodb.net/kiralogin",
  { useNewUrlParser: true }
);
const loginSchema = {
  FullName: String,
  Username: String,
  Email: String,
  Mobile: Number,
  password: String,
  img: { data: Buffer },
};
const User = mongoose.model("User", loginSchema);


// Login handle
app.post("/login", function (req, res) {
  const Fnameuser1 = req.body.Fnameuser1;
  const passuser1 = req.body.passuser1;
  console.log(Fnameuser1);

  User.findOne(
    ({ Email: Fnameuser1 }, { password: passuser1 }),
    function (err, result) {
      if (result === null) {
        res.send({ message: "failed" });
      } else {
        res.send({ message: "login sucess", F1: Fnameuser1 });
        console.log(result.img);
        console.log(result.password);
      }
    }
  );
});

app.post("/uploadphoto", function (req, res) {
  const pic = req.body.pic;
  const uname = req.body.username;
  console.log(uname);
  console.log(pic);

  User.findOneAndUpdate(
    { FullName: uname },
    { img: pic },
    { upsert: true },
    function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully saved.");
    }
  );
});
app.post("/createuser", function (req, res) {
  const Fname = req.body.Fname;
  const Uname = req.body.Uname;
  const Email1 = req.body.email;
  const Num = req.body.Num;
  const Pass = req.body.Pass;

  const User1 = new User({
    FullName: Fname,
    Username: Uname,
    Email: Email1,
    Mobile: Num,
    password: Pass
  });
  User1.save();
  console.log(Email1)
});

// msg schema
const msgSchema = {
  FullName: String,
  Lastname: String,
  Email: String,
  Msg: String,
};
const Msg = mongoose.model("Msg", msgSchema);
app.post("/msg", function (req, res) {
  const Fname = req.body.Fname;
  const Lname = req.body.Lname;
  const Email = req.body.email;
  const Msg11 = req.body.msg;

  res.send({ message: "message sent success" });

  const Msg1 = new Msg({
    FullName: Fname,
    Username: Lname,
    Email: Email,
    Msg: Msg11,
  });
  Msg1.save();
});

app.listen(3002, function () {
  console.log("started");
});

// 2. Login & Register Screen with API

//     - Register

//         - Full Name

//         - Username

//         - Email

//         - Mobile

//         - Password

//         (create api for registration using nodeJs)

//     - Login

//         - Username/email

//         - Password

//     (Validation must for all fields)
//     (create api for registration using nodeJs)
