import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username !== process.env.ADMIN_USER || password !== process.env.ADMIN_PASS) {
    return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre' });
  }

  const token = jwt.sign(
    { user: username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};
