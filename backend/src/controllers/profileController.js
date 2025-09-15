import Profile from '../models/Profile.js';


export const getProfile = async (req, res) => {
const profile = await Profile.findOne().lean();
if (!profile) return res.status(404).json({ message: 'Profile not found' });
res.json(profile);
};