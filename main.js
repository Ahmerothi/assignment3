import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import passport from 'passport';
import connectDB from './connectDB/connectDB.js';
import routes from './routes/routes.js';

const app = express();
app.use(
    session({
      secret: 'your_secret_key',
      resave: false,
      saveUninitialized: false,
    })
  );
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());






// Database Connection
connectDB();

// Static Files
app.use(express.static('public'));

// Routes
app.use(routes);

// View Engine
app.set('view engine', 'ejs');

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
