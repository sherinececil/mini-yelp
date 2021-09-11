import Router from "express";
import City from "../models/city.js";

export async function getAll(req, res) {
  try {
    const result = await City.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getOneByID(request, response) {
  try {
    const { query } = request.params;
    console.log(query);
    // const query = { id: "610c65326b673783aff3b76d" };
    const result = await City.findOne(query);
    // console.log(query.cuisine);
    response.json(result);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

export async function createOne(request, response) {
  console.log("Am i here .....city");
  try {
    console.log("Am i here .....city");
    const newCity = await City.create(request.body);
    console.log(newCity);
    response.json(newCity);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
}
