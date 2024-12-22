const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.get("/",(req,res)=>{
   return res.send("Hello guyzzzz");
    
})

app.get("/api/users",(req,res)=>{
    return res.json(users);
})

app.post("/api/users", (req,res)=>{
    const body = req.body;
    console.log(body);
    users.push({...body, id : users.length + 1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.json({status: "success" , id : users.length});
    })
   
    });
    


app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id);
    return res.json(user);
})

app.listen(3000, ()=>{
    console.log("Server Started on port 3000")
})