import express from 'express';
import multer from 'multer';
import { ImageAnnotatorClient } from '@google-cloud/vision';
import { JWT } from 'google-auth-library';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

const upload = multer({ dest: 'uploads/' });

// Створюємо JWT-клієнт
const auth = new JWT({
  keyFile: './key.json', // твій JSON з Google Cloud
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

// Передаємо auth в клієнт Vision API
const client = new ImageAnnotatorClient({ auth });

// Маршрут для аналізу фото
app.post('/analyze', upload.single('image'), async (req, res) => {
  try {
    const [result] = await client.labelDetection(req.file.path);
    const labels = result.labelAnnotations.map((l) => l.description);
    res.json({ labels });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Vision API error' });
  }
});

app.listen(port, () => console.log(`✅ Сервер працює на порту ${port}`));
