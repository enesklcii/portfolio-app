import Profile from "../models/Profile.js";

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Profil yüklenemedi" });
  }
};

export const upsertProfile = async (req, res) => {
  try {
    const data = req.body;
    const profile = await Profile.findOneAndUpdate({}, data, {
      new: true,
      upsert: true,
    });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Profil kaydedilemedi" });
  }
};
