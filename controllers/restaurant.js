import Router from "express";
import Restaurant from "../models/restaurant.js";

export async function getAll(req, res) {
  try {
    const result = await Restaurant.find().populate("city").populate("tag");
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getOneByID(request, response) {
  try {
    const { query } = request.params;
    console.log(query);
    // const query = { id: "613a7cefcab2fc2c21a15496" };
    const result = await Restaurant.findOne(query).populate("city").populate("tag");
    // console.log(query.cuisine);
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

export async function createOne(request, response) {
  console.log("Am i here .....15");
  try {
    console.log("Am i here .....15");
    const newRestaurant = await Restaurant.create(request.body);
    response.json(newRestaurant);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}

