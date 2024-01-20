import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/advance_express';
async function connectWithDB() {
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,  
        useUnifiedTopology: true, 
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
}
  export default connectWithDB