import Router from 'express';
import Restaurant from '../models/restaurant.js';

export async function getAll(req, res) {
    try {
      const result = await Restaurant.find();
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
      const result = await Restaurant.findOne(query).populate("restaurant");
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