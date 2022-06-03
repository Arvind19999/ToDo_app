const ToDo= require("../models/ToDoModel");

module.exports.getToDo = async (req,res)=>{
    const Todo = await ToDo.find();
    // console.log(Todo);
    res.send(Todo); 
}

module.exports.saveToDo = async (req,res)=>{
// const { name }  =req.body;
const { name,description }  =req.body;

// ToDo
// .create({ name })
// .then(()=>res.set(201).send("Item Added Successfully"))
// .catch((err)=>console.log(err));
ToDo
.create({ name,description })
.then(()=>res.set(201).send("Item Added Successfully"))
.catch((err)=>console.log(err));
}

module.exports.deleteToDo = async(req,res)=>{
    const { _id } = req.body;
    ToDo
    .findByIdAndDelete(_id)
    .then(()=>res.set(201).send("Item Deleted Successfully"))
    .catch((err)=>console.log(err));
}

module.exports.updateToDo = async(req,res)=>{
    // const { _id,name} = req.body;
    const { _id,name,description} = req.body;
    ToDo
    // .findByIdAndUpdate(_id,{name,description})
    // await MyModel.updateMany({}, { $set: { name: 'foo' } });
    .updateMany({_id},{$set:{
        name:name,
        description:description
    }})
    .then(()=>res.set(201).send("Item Updated Successfully"))
    .catch((err)=>console.log(err));
}
