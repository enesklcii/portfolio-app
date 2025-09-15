import mongoose from 'mongoose';


const profileSchema = new mongoose.Schema(
{
name: { type: String, required: true },
title: { type: String, required: true },
summary: { type: String, required: true },
location: String,
email: String,
socials: {
github: String,
linkedin: String,
twitter: String,
website: String
},
skills: [String]
},
{ timestamps: true }
);


export default mongoose.model('Profile', profileSchema);