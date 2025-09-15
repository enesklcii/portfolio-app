import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'express-async-errors';
import router from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';


const app = express();


app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api', router);


app.use(notFound);
app.use(errorHandler);


export default app;