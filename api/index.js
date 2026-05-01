const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'src', 'views'));

// Configurar la ruta para los archivos estáticos en 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Middleware para parsear los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? false : 'http://localhost:4000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Configuración de las sesiones
app.use(session({
  secret: 'fas5zr23rdrt5yt6wqsded58zd24',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Rutas
app.get(['/', '/home'], (req, res) => {
  res.render('home', {
    title: 'Agencia Digital Creativa - MOOD',
    page: 'home',
    meta_description: 'Mood: La agencia de comunicación que revoluciona el marketing. Especialistas en ATL, Digital, PR y BTL, ofrecemos soluciones para potenciar tu marca.',
    title_heading: 'Agencia Digital Creativa',
    pageImage: 'images/Mood-thumbnail.webp',
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    pageType: 'video.mp4',
    locale: 'es_PE',
    imageWidth: '1200',
    imageHeight: '630',
    pageVideo: 'videos/video.mp4'
  });
});

app.get('/adn_mood', (req, res) => {
  res.render('adn_mood', {
    title: 'Conóce nuestro ADN - MOOD',
    page: 'adn_mood',
    meta_description: 'Conóce la historia y cultura de nuestra agencia de comunicaciones mood con presencia en Panamá, Colombia y Perú. servicios de mktg digital, ATL y BTL.',
    title_heading: 'Conócenos',
    pageImage: 'images/Mood-thumbnail.webp',
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    pageType: 'website',
    locale: 'es_PE',
    imageWidth: '1200',
    imageHeight: '630'
  });
});

app.get('/mood_print', (req, res) => {
  res.render('mood_print', {
    title: 'Servicios - MOOD',
    page: 'mood_print',
    meta_description: 'Descubre el poder de Mood: expertos en servicios de social media marketing, ecommerce, performance marketing, influencer marketing y más.',
    title_heading: 'Servicios',
    pageImage: 'images/Mood-thumbnail.webp',
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    pageType: 'website',
    locale: 'es_PE',
    imageWidth: '1200',
    imageHeight: '630'
  });
});

app.get('/whatsyourmood', (req, res) => {
  res.render('whatsyourmood', {
    title: 'Blog, agencia creativa digital - MOOD',
    page: 'whatsyourmood',
    meta_description: 'Explora nuestro blog y descubre temas fascinantes como marketing, digital planning, inteligencia artificial, ecommerce, entre otros.',
    title_heading: 'Blog',
    pageImage: 'images/Mood-thumbnail.webp',
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    pageType: 'website',
    locale: 'es_PE',
    imageWidth: '1200',
    imageHeight: '630'
  });
});

app.get('/whatsyourmood/contratar-agencia-marketing-digital', (req, res) => {
  res.render('contratar-agencia-marketing-digital', {
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
  });
});

app.get('/whatsyourmood/regionalizacion', (req, res) => {
  res.render('regionalizacion', {
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
  });
});

app.get('/whatsyourmood/nuevo-medio-digital', (req, res) => {
  res.render('nuevo-medio-digital', {
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
  });
});

app.get('/whatsyourmood/algoritmos-organico', (req, res) => {
  res.render('algoritmos-organico', {
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contacto - MOOD',
    page: 'contact',
    meta_description: 'Contáctanos para potenciar tu marca. Somos una agencia de comunicaciones con presencia en Panamá, Colombia y Perú.',
    title_heading: 'Contacto',
    pageImage: 'images/Mood-thumbnail.webp',
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    pageType: 'website',
    locale: 'es_PE',
    imageWidth: '1200',
    imageHeight: '630'
  });
});

app.get('/success', (req, res) => {
  res.render('success', {
    title: 'Mensaje enviado - MOOD',
    page: 'success',
    meta_description: 'Tu mensaje ha sido enviado exitosamente. Gracias por contactarnos.',
    title_heading: 'Mensaje enviado',
    pageImage: 'images/Mood-thumbnail.webp',
    pageUrl: req.protocol + '://' + req.get('host') + req.originalUrl,
    pageType: 'website',
    locale: 'es_PE',
    imageWidth: '1200',
    imageHeight: '630'
  });
});

module.exports = app;