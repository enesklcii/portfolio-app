// src/models/Education.js
import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Eğitim adı
  provider: String, // Kurum / Platform
  date: String,     // Tarih
  description: String,
  certificateUrl: String
}, { timestamps: true });

export default mongoose.model('Education', educationSchema);
