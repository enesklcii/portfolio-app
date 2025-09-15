import dotenv from 'dotenv';
dotenv.config();
import app from './src/app.js';
import { connectDB } from './src/config/db.js';


const PORT = process.env.PORT || 5000;


connectDB()
.then(() => {
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
})
.catch((err) => {
console.error('DB connection failed:', err);
process.exit(1);
});