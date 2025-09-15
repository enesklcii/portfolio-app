import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  provider: String,
  date: String,
  certificateUrl: String,
}, { timestamps: true });

export default mongoose.model('Certificate', certificateSchema);
