import dotenv from 'dotenv';
import Education from '../models/Education.js';
dotenv.config();
import { connectDB } from '../config/db.js';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';


const run = async () => {
await connectDB();
await Profile.deleteMany({});
await Project.deleteMany({});


await Education.deleteMany({});
await Education.insertMany([
  {
    title: "React Bootcamp",
    provider: "Udemy",
    date: "2023",
    description: "React, Hooks ve Redux ile modern front-end geliştirme",
    certificateUrl: "https://udemy.com/certificate/12345"
  },
  {
    title: "Backend Development",
    provider: "BTK Akademi",
    date: "2022",
    description: "Node.js ve Express ile REST API geliştirme"
  },
   {
    title: "React Bootcamp",
    provider: "Udemy",
    date: "2023",
    description: "React, Hooks ve Redux ile modern front-end geliştirme",
    certificateUrl: "https://udemy.com/certificate/12345"
  },
   {
    title: "React Bootcamp",
    provider: "Udemy",
    date: "2023",
    description: "React, Hooks ve Redux ile modern front-end geliştirme",
    certificateUrl: "https://udemy.com/certificate/12345"
  },
   {
    title: "React Bootcamp",
    provider: "Udemy",
    date: "2023",
    description: "React, Hooks ve Redux ile modern front-end geliştirme",
    certificateUrl: "https://udemy.com/certificate/12345"
  },
]);


await Profile.create({
name: 'Enes Kılıç',
title: 'Yazılım Mühendisi',
summary: 'Backend/Frontend/AI odaklı, ölçeklenebilir sistemler geliştiriyorum.',
location: 'Kars, Türkiye',
email: 'klc02enes36@gmail.com',
socials: {
github: 'https://github.com/enesklcii',
linkedin: 'https://www.linkedin.com/in/enesklcii',
website: 'https://seninsite.com'
},
skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'REST API', 'Docker']
});


await Project.insertMany([
{
title: 'AI Q&A Bot',
description: 'Dış API ile entegre soru-cevap asistanı.',
techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
repoUrl: 'https://github.com/kullanici/ai-qa-bot',
liveUrl: 'https://aiqabot.example.com',
featured: true
},
{
title: 'E-Ticaret Mini',
description: 'Sepet ve ödeme simülasyonu olan basit e-ticaret front-end.',
techStack: ['React', 'Vite', 'Stripe Mock'],
repoUrl: 'https://github.com/kullanici/ecom-mini'
}
]);



console.log('Seed tamamlandı');
process.exit(0);
};


run().catch((e) => {
console.error(e);
process.exit(1);
});