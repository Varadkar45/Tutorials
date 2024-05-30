const express = require("express");
const fs = require('fs');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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
app.get("/users", (req,res) => {
    const html = `
    <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

app.get("/api/users", (req,res) => {
    res.header("X-myName", "Shreyas Varadkar");
    //alwayd add X to custom headers
    console.log(req.headers);
    return res.json(users);
})

app.get("/api/users/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id===id);
    if(!user) return res.status(404).json({Msg: 'User doesnot Exist'});
    return res.json(user);
})

app.post("/api/users/", (req,res) => {
    const body = req.body;
    if(!body||!body.first_name||!body.last_name||!body.email||!body.job_title) {
      return res.status(400).json({msg: 'All fields are required'});
    }
    users.push({...body, id: users.length+1} );
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data) =>{
        return res.status(201).json({status: "Success", id: users.length});
    })
    
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

app.patch('/api/users/:id',(req, res) => {
    const id = Number (req.params.id)
    let user = users.find (user => user.id === id)
    const idx = users.indexOf (user);
    const newObj = Object.assign (user , req.body)
    users[idx] = newObj;
    fs.writeFile ('./MOCK_DATA.json',JSON.stringify(users) , (err,data) => {
      return res.json ({ 
        status: "success",
        users: user 
     })
   })
  })
//pass raw data in body in postman such as {"job_title": "Data Analyst"}


// app.delete("/api/users/:id", (req,res) => {
//     //TOOD: Delete the user  with id
//     return res.json({status: "pending"});
// })

app.delete('/api/users/:id',((req,res)=>{
    
    //TODO: Delete the user with id
    const id = Number(req.params.id)

    if(id!=-1 && users.length>=id){
      users.splice(id-1,1);
      fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        if(!err){
          return res.status(200).json({success:"User delete"});
        }else{
          res.status(500).json({error:"Failed to delete user"});
        }
    });
  }else{
    return res.status(404).json({error:"User not found"});
  }  
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