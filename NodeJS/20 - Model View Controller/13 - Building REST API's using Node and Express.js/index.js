const express = require("express");
const fs = require('fs');

const users = require("./MOCK_DATA.json");

const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;

// connection
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app")
  .then(()=>console.log("MongoDB Connected Sucessfully"))
  .catch(err => console.log("Mongo Error", err));


//MiddleWare - Plugin
app.use(express.urlencoded({extended: false}));
// app.use(express.json());
// app.use((req,res,next) => {
//     console.log("Hello from middleware - 1");
//     next();
// })

// app.use((req,res,next) => {
//     console.log("Hello from middleware - 2");
//     return res.json;
// })


//Routes
app.use("/user", userRouter);


//shortcut as path is same

// app.route("/api/users/:id").get((req,res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id===id);
//     return res.json(user);
// })
// .patch((req,res) => {
//     //TOOD: Edit the user  with id
//     return res.json({status: "pending"});
// })
// .delete((req,res) => {
//     //TOOD: Delete the user  with id
//     return res.json({status: "pending"});
// })


app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));