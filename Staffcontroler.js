
const Staff = require("./Staffschema");
const StaffRegistation = (req, res) => {
  const newStaff = new Staff({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
    email: req.body.email,
    gender: req.body.gender,
  });
  newStaff
    .save()
    .then((data) => {
      console.log(data);
      res.json({ status: 200, message: "Data stored successfully", data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ status: 400, messege: "Failed" });
    });
};
const StaffLogin=(req,res)=>{
  console.log(req.body.email);
  console.log(req.body.password);
  
  Staff.findOne({email:req.body.email}).exec()
  .then(data=>{
      if(data){
        if(data.password == req.body.password){
          res.json({status:200 ,message:"login successful", data});
        }
        else{
          res.json({status:405 ,message:"invalled password", data});
        }
      }
      else{
        res.json({status:409 ,message:"user not found"});
      }
    })
    .catch((error)=>{
      console.log(error);
      res.json({status:400 ,message:"fail to login"});
    });
};

module.exports={StaffRegistation,StaffLogin}