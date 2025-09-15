import Education from '../models/Education.js';

// Tüm eğitimleri getir
export const getEducation = async (req, res) => {
  const items = await Education.find().sort({ date: -1 }).lean();
  res.json(items);
};

// Yeni eğitim ekle (isteğe bağlı, şimdilik admin panel yoksa Postman ile test edebilirsin)
export const createEducation = async (req, res) => {
  const { title, provider, date, description, certificateUrl } = req.body;
  if (!title) return res.status(400).json({ message: 'title alanı gerekli' });
  const edu = await Education.create({ title, provider, date, description, certificateUrl });
  res.status(201).json(edu);
};
