import dotenv from 'dotenv';
import { connectDB } from '../config/db.js';
import Education from '../models/Education.js';
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';

dotenv.config();

const run = async () => {
  await connectDB();

  // Temizle
  await Profile.deleteMany({});
  await Project.deleteMany({});
  await Education.deleteMany({});

  // Eğitimler
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
    }
  ]);

  // Profil
  await Profile.create({
    name: 'Enes Kılıç',
    title: 'Yazılım Mühendisi',
    summary: 'Backend/Frontend/AI odaklı, ölçeklenebilir sistemler geliştiriyorum.',
    location: 'Kars, Türkiye',
    email: 'klc02enes36@gmail.com',
    phone: '+90 538 012 46 89',
    photo: 'https://i.ibb.co/2N8y5ZK/IMG-20230926-205634-1.jpg',
    cvUrl: 'https://seninsite.com/cv.pdf',
    socials: {
      github: 'https://github.com/enesklcii',
      linkedin: 'https://www.linkedin.com/in/enesklcii',
      website: 'https://seninsite.com'
    },
    skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'REST API', 'Docker']
  });

  // Projeler
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

  console.log('✅ Seed tamamlandı');
  process.exit(0);
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
