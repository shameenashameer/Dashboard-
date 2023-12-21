




import mongoose from 'mongoose';

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log('Using existing MongoDB connection');
    return;
  }

  // Create new database connection
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('New MongoDB connection established');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

export { connectDB };
