import express from 'express';
import path from 'path';
import {indexRouter} from './routes/index.js';
// import {APIRouter} from './routes/api';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';
dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const port = process.env.PORT || 8089;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
// app.use('/api/', APIRouter);
app.set('views', path.join(__dirname, 'views'));


export async function start() {
  app.listen(port, () => console.log(`Server started on port ${port}`));
}
