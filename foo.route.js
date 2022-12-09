const{ Router }=require("express");
const router=new Router();

const fooService=require("../service/foo.service");

router.get("/",fooService.getEmployees);
router.post("/",fooService.putEmployees);
router.get("/:id",fooService.getEmployeeById);

module.exports=router;