import mongoose from "mongoose";
const seasonSchema = mongoose.Schema({
  name: { type: String, required: true},
  description: { type: String},
  series_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"Series"
  }
},
{ 
  timestamps: true
}
);
export default mongoose.model("Season", seasonSchema);
