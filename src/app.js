const express=require("express");
const app=express();
const port=process.env.PORT || 3000;

// this is to get json format data 
app.use(express.json());


// this is for database connection 
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Demoassignment', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// to check the connection 
db.once('open', function () {
    //We are connected!
    console.log("We are connected bro!");
});


// this is to create schema to store data to the database 
const userSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    event:[{
        // eventid:{
        //     type:String,
        //     // required:true,
        //     trim:true
        // },
        eventuid:{
            type:String,
            unique:true,
            trim:true
        },
        eventname:{
            type:String,
            trim:true
        },
        occurence:{
            type:"String",
            trim:true
        },
        startDate:{
            type:Date

        },
        endDate:{
            type:Date
        }

    }]
    
})
// we are creating a new collection 
const AvataarUser=new mongoose.model("demo",userSchema)


// we will handle post request to add user
app.post("/users",async(req,res)=>{
    try{
        const addingUser= new AvataarUser(req.body)
        console.log(req.body)

        // as .save promise return kr rha h toh future ke use ke liye await likha h 
        const insertMens=await addingUser.save();
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})


// here we will handle get request to get all users
app.get("/users",async(req,res)=>{
    try{
        const getUsers=await AvataarUser.find({});
        res.status(201).send(getUsers);
    }catch(e){
        res.status(400).send(e);
    }
})

//this is to add event of the user by id
app.patch("/users/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getUser=await AvataarUser.findByIdAndUpdate(_id,{$push:req.body},{new:true});
        res.status(201).send(getUser);
    }catch(e){
        res.status(500).send(e);
    }
})

//this is to delete user by id
app.delete("/users/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const getUser=await AvataarUser.findByIdAndDelete(_id);
        res.status(201).send(getUser);
    }catch(e){
        res.status(500).send(e);
    }
})


//this to start the server
app.listen(port,()=>{
    console.log(`Connection is live at port ${port}`);
})
