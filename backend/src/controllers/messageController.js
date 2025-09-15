import Message from '../models/Message.js';


export const createMessage = async (req, res) => {
const { name, email, message } = req.body || {};
if (!name || !email || !message) {
return res.status(400).json({ message: 'name, email ve message zorunlu' });
}
const saved = await Message.create({ name, email, message });
res.status(201).json({ id: saved._id });
};