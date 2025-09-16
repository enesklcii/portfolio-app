import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: String,
  title: String,
  summary: String,
  about: String,
  photo: String,
  email: String,
  location: String,
  phone: String,
  cvUrl: String,
  socials: {
    github: String,
    linkedin: String,
    website: String,
  },
}, { timestamps: true });

export default mongoose.model('Profile', profileSchema);
