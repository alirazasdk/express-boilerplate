import {Stream} from "../models/index.js";
const StreamService = {
  // getAll: async () => {
  //     const users=await User.find();
  //     const allUsers=users.map(user=>{
  //       delete user._doc.password
  //       return user
  //     })
  //     return {
  //     message: "Successfull",
  //     data:users,
  //   };
  // },
  // getById: async (id) => {
  //     const user=await User.findOne({_id:id});
  //     delete user._doc.password
  //     return {
  //     message: "Successfull",
  //     data:user,
  //   };
  // },

  // add: async (body) => {
  //   const isExists=await User.findOne({email:body.email})
  //   if (isExists) {
  //     throw { message: "User already exists" };
  //   }
  //   body.password=passwordHash.generate(body.password)
  //   const user=await User.create(body);
  //   return {
  //     message: "Signup Successfully",
  //     data:{first_name:user.first_name,last_name:user.last_name,email:user.email},
  //   };
  // },
  // updateById: async (id,body) => {
  //   const isExists=await User.findById(id)
  //   if (!isExists) {
  //     throw { message: "User doesn't exists" };
  //   }
  //   if(body.first_name){
  //     isExists.first_name=body.first_name
  //   }
  //   if(body.last_name){
  //     isExists.last_name=body.last_name
  //   }
  //   if(body.email){
  //     isExists.email=body.email
  //   }
  //   await isExists.save();
  //   delete isExists._doc.password
  //   return {
  //     message: "User Data Updated Successfully",
  //     data:isExists,
  //   };
  // },
  // deleteById: async (id) => {
  //   const isExists=await User.findByIdAndDelete(id)
  //   if (!isExists) {
  //     throw { message: "User doesn't exists" };
  //   }
    
  //   return {
  //     message: "User Deleted Successfully",
  //     data:{_id:isExists._id},
  //   };
  // },
  // login: async (body) => {
  //   const isExists=await User.findOne({email:body.email})
  //   if (!isExists) {
  //     throw { code: "UNAUTHORIZED", message: "User Not Found" };
  //   }
    
  //   if(!passwordHash.verify(body.password,isExists.password)){
  //     throw { code: "UNAUTHORIZED", message: "Password does not match" };
  //   }
  //   delete isExists._doc.password

  //   const token=jwt.sign(isExists._doc, config.env.secretKey);
  //   return {
  //     message: "Login Successfull",
  //     data:{token},
  //   };
  // },
};

export default StreamService;
