import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  restaurant_name: { type: String },
  city: { type: mongoose.Schema.Types.ObjectId, ref: "city" },
  tag: { type: mongoose.Schema.Types.ObjectId, ref: "tag" },
  price_range: { type: String },
  lat: { type: Number },
  lnt: { type: Number },
  phone: { type: String },
  image: { type: String },
  rating: { type: String },
  website: { type: String },
});

const Restaurant = mongoose.model("restaurant", RestaurantSchema);
export default Restaurant;
