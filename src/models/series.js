import mongoose from "mongoose";
const seriesSchema = mongoose.Schema({
  name: { type: String, required: true},
  description: { type: String},
  trailer: { type: String},
  genre_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Genre"
  }
},
{ 
  timestamps: true
}
);
export default mongoose.model("Series", seriesSchema);
