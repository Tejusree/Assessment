var employees=require('./employee.json')

module.exports.getEmployees=async(req,res,next)=>{
    console.log("testing..");
    res.send(employees);
};

module.exports.putEmployees=async(req,res,next)=>{
    var body=req.body;
    console.log(req.body);
    var name=body.name;
    var id=body.id;
    var role=body.role;
    var employee={name:name,id:id,role:role};
    employees.push(employee);
    res.send(employee);
}

module.exports.getEmployeeById=async(req,res,next)=>{
    var id=req.params.id;
    var e=employees.find(x=>x.id==id);
    res.send(e);
}

