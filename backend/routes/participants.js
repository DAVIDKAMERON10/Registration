import express from 'express';
import QRCode from 'qrcode';
import Participant from '../models/participant.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const qrData = JSON.stringify(data);
    const qrCodeData = await QRCode.toDataURL(qrData);
    const participant = new Participant({ ...data, qrCodeData });
    await participant.save();
    res.status(201).json(participant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
