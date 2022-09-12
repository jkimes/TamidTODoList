const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/TodoItem')
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Jalon:12345@cluster0.xsiln.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    
})
console.log("Connected to Mongoose");

//This route adds the todo entry into the database
app.post("/insert",async (req,res) => {
    const inputText = req.body.description // this is how you access the info you type into the first input box ie. the todo item    
    const item = new Item({description: inputText}); // creates the data base entry with the info you type into the input box

    try{
        await item.save();
    }catch(err){
        console.log(err)
    }
})

// this route will read all of the data in the table
app.get("/read",async (req,res) => {
     Item.find({}, (err,result) => {
        if(err){
            res.send(err)
        }
        res.send(result);
    })
})

// This route updates the todo item 
app.put("/update",async (req,res) => {
    const newDescription = req.body.newDescription;
    console.log(newDescription);
    const id = req.body.id;
    try {
      await Item.findOneAndUpdate(id,(err, updatedItem) =>{
        updatedItem.description = newDescription
        updatedItem.save();
        res.send("update");
       });
    } catch (error) {
        console.log("Update Error: " + error);
    }
})

// This route will remove the item from the todo list
app.delete("/delete/:id",async (req,res) => {
    console.log("Deleted")
    const id = req.params.id;
    await Item.findByIdAndRemove(id).exec();
    res.send('deleted')
})

app.listen(3001,() => {
    console.log('Server running on port 3001');
})