import Certificate from '../models/Certificate.js';

export const getCertificates = async (req, res) => {
  const certs = await Certificate.find();
  res.json(certs);
};

export const createCertificate = async (req, res) => {
  try {
    const cert = new Certificate(req.body);
    await cert.save();
    res.status(201).json(cert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
