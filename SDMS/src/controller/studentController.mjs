import studentModal from "../models/studentModal.mjs";

const findStudent = async (req, res) => {
    const students=await studentModal.find();  
    // const students=await studentModal.findOne();  //jo phele milega wo ajayega
  res.send({status:true,message:students});
};

const createStudent = async (req, res) => {
  const data = req.body;
  // const createdStudent=await studentModal.create(data);
  const createdStudent=await studentModal.insertMany([data,data,data]);
  return res.send({ status: true, message: createdStudent });
};

const deleteStudent=async (req,res)=>{
  const data=await studentModal.deleteMany({name:'Adnan'})
  // const data=await studentModal.findByIdAndDelete({_id:"660f84e6f817d611db6ca8f5"})
  return res.send({status:true,message:data})
}

const updateStudent=async (req,res)=>{
  const newStudent=await studentModal.updateOne({"name":"Adnan"},{$set:{"name":"praja"}});
  return res.send({status:true,message:newStudent})
}

export { findStudent, createStudent ,deleteStudent,updateStudent };
