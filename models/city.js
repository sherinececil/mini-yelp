import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  name: { type: String },
});

const City = mongoose.model("city", CitySchema);
export default City;
