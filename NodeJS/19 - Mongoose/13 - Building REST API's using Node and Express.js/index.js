const express = require("express");
const fs = require('fs');
const mongoose = require('mongoose');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// connect mongob
mongoose.connect("mongodb://127.0.0.1:27017/youtube-app")
  .then(()=>console.log("MongoDB Connected Sucessfully"))
  .catch(err => console.log("Mongo Error", err));




//connecting with mongo db

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  }
}, {timestamps:true})

//mongodb model
const User = mongoose.model("user", userSchema);

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
app.get("/users", async (req,res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map((user)=> `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

app.get("/api/users", async (req,res) => {
    const allDbUsers = await User.find({});
    
 
    return res.json(allDbUsers);
})

app.get("/api/users/:id", async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({Msg: 'User doesnot Exist'});
    return res.json(user);
})

app.post("/api/users/", async (req,res) => {
    const body = req.body;
    if(!body||!body.first_name||!body.last_name||!body.email||!body.job_title) {
      return res.status(400).json({msg: 'All fields are required'});
    }

    const result = await User.create({
      firstName: body.first_name,
      lastName: body.last_name,
      email: body.email,
      gender: body.gender,
      jobTitle: body.job_title,
    })
    console.log("result", result);

    return res.status(201).json({msg: "Success"});
    
    
})

// app.patch("/api/users/:id", (req,res) => {
//     const id = Number(req.params.id);
//     const body = req.body;
//     const user = users.find((user) => user.id===id);

//     const updatedUser = { ...user, ...body };
//     updatedUser.id = id;
//     users[id-1]=updatedUser;

//    fs.writeFile('MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//         return res.json({ status: "Success", updatedUser})
//     //TOOD: Edit the user  with id
//    })
    
// })

app.patch('/api/users/:id',async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed"});
    return res.json({status:'Succcess'});
   })
  
//pass raw data in body in postman such as {"job_title": "Data Analyst"}


// app.delete("/api/users/:id", (req,res) => {
//     //TOOD: Delete the user  with id
//     return res.json({status: "pending"});
// })

app.delete('/api/users/:id',(async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
})
);






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