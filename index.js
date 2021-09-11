import dotenv from 'dotenv';
dotenv.config();
import  express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import restaurantsRouter from './routes/routes.js';
import connectToDatabase from './models/index.js';

const PORT = process.env.PORT || 8080;
var app = express();

app.use(express.json());
app.use(cors({
  origin: "https://mini-yelp-group2.herokuapp.com/" 
}))
app.use(cors({
  origin: "http://localhost:5000/" 
}))
app.use('/restaurants', restaurantsRouter)


connectToDatabase().then((err, res)=> {
  app.listen(PORT,function(){
    console.log('server is running on' + " " + `http://localhost:${PORT}`);
  });
})
