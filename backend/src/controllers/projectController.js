import Project from '../models/Project.js';

// Tüm projeleri getir
export const getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 }).lean();
  res.json(projects);
};

// Yeni proje ekle (admin panel için)
export const createProject = async (req, res) => {
  const { title, description, techStack, repoUrl, liveUrl } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'title alanı gerekli' });
  }

  const project = await Project.create({
    title,
    description,
    techStack,
    repoUrl,
    liveUrl
  });

  res.status(201).json(project);
};
