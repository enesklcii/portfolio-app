// backend/src/config/db.js
import mongoose from 'mongoose';

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI not set');
  await mongoose.connect(uri); // dbName parametresini kaldırdık
  console.log('MongoDB connected');
};
