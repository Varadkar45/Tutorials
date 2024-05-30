const express = require("express");

const router = express.router();

//routers
router.get("/users", async (req,res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map((user)=> `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

router.get("", async (req,res) => {
    const allDbUsers = await User.find({});
    
 
    return res.json(allDbUsers);
})

router.get("/:id", async (req,res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({Msg: 'User doesnot Exist'});
    return res.json(user);
})

router.post("/", async (req,res) => {
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

// router.patch("/:id", (req,res) => {
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

router.patch('/:id',async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed"});
    return res.json({status:'Succcess'});
   })
  
//pass raw data in body in postman such as {"job_title": "Data Analyst"}


// router.delete("/:id", (req,res) => {
//     //TOOD: Delete the user  with id
//     return res.json({status: "pending"});
// })

router.delete('/:id',(async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: "Success"});
})
);

module.exports = routerr;