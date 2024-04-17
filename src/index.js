import bodyParser from 'body-parser';
import express from 'express';
import { router as noteRouter } from './modules/note/note.controller';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(noteRouter);
app.listen(3000, async () => {
  mongoose.set(`strictQuery`, true);
  await mongoose.connect(`mongodb+srv://kraiwithkamchu:HKtQzuOWqvt7GYdl@cluster0.xbzxqpb.mongodb.net/`);

  console.log(`http://localhost:3000/`);
});
