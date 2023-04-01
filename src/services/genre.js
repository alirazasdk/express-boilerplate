import {Genre} from "../models/index.js";
const GenreService = {
  getAll: async () => {
      const genres=await Genre.find();
      return {
      message: "Successfull",
      data:genres,
    };
  },
  // getById: async (id) => {
  //     const user=await User.findOne({_id:id});
  //     delete user._doc.password
  //     return {
  //     message: "Successfull",
  //     data:user,
  //   };
  // },

  create: async (body) => {
    const genre=await Genre.create(body);
    return {
      message: "Genre Created Successfully",
      data:genre,
    };
  },
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

export default GenreService;
