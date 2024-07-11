const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const cookieParser = require('cookie-parser')


require('dotenv').config();
const router = require('./routes/routes')

const app = express();

// Middleware use
app.use(cors({
  origin: process.env.CORS_ORIGIN, // specify the allowed origin
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true // Allow credentials
}));
app.use(cookieParser())
app.use(express.json({ limit:  2 * 1024 * 1024 }));
app.use(express.urlencoded({ extended: true, limit:  2 * 1024 * 1024 }));




//routes use
app.use("/api",router)




const port = process.env.PORT || 3000;
async function connectToDatabase() {
    try {
      // Connection URL
      const dbURI = process.env.MONGOURI;
  
      // Options for Mongoose connection
      const options = {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      };
  
      // Connect to MongoDB
      await mongoose.connect(dbURI, options);
  
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  // Call the function to connect to MongoDB
  connectToDatabase();


  app.get('/', (req, res) => {
    res.send('server running!')
  })


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
