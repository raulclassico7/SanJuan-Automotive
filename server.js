// const express = require('express');
import express from 'express';
const router = express.Router();
import cors from 'cors';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
  allowedHeaders: "Content-Type, Accept, Authorization" // Allow these headers
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', router);

// Derive __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle client-side routing, return all requests to the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(8000, () => console.log('Listening on port 8000'));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'raulclassico7@gmail.com',
    // pass: "" create a application password in order to access this feature "fdmu yajb oduo xsyx"
    pass: 'fdmuyajboduoxsyx'
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to send');
  }
});

router.post('/contact', (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const make = req.body.make;
  const model = req.body.model;
  const year = req.body.year;
  const reason = req.body.reason;
  const date = req.body.date;
  const time = req.body.time;
  const mail = {
    from: fullName,
    to: 'raulclassico7@gmail.com',
    subject: 'New Customer Appointment Scheduled - San Juan Automotive',
    html: `<p>Name of Customer: ${fullName}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phoneNumber}</p>
                <p>Make: ${make}</p>
                <p>Model: ${model}</p>
                <p>Year: ${year}</p>
                <p>Reason for Visit: ${reason}</p>
                <p>Date of Appointment: ${date}</p>
                <p>Time of Appointment: ${time}</p>`
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});
