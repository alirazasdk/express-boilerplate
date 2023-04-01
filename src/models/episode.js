import mongoose from "mongoose";
const episodeSchema = mongoose.Schema({
  name: { type: String, required: true},
  description: { type: String},
  image:{type:String},
  season_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Season"
  }
},
{ 
  timestamps: true
}
);
export default mongoose.model("Episode", episodeSchema);
