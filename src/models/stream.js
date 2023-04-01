import mongoose from "mongoose";
const streamSchema = mongoose.Schema({
  time: { type: String, required: true},
  episode_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Episode"
  },
  User_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User"
  }
},
{ 
  timestamps: true
}
);
export default mongoose.model("Stream", streamSchema);
