const path = require('path');
const express = require('express');
const morgan = require('morgan');
// app.use(morgan('combined'));
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const hbs = handlebars.create({
  extname: '.hbs'
});

// Configure Handlebars as the view engine 
app.engine('hbs', hbs.engine); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
