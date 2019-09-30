const express = require('express');
const app = express();
const PORT = 8080;

// set the view engine
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', (req,res) => {
  const drinks = [
    { name: 'Bloody Mary', drunkness: 3 },
    { name: 'Martini', drunkness: 5 },
    { name: 'Scotch', drunkness: 10 }
  ];
  const tagline = 'Any code of your own that I haven\'t looked at for six or more months might as well have been written by someone else.'
  res.render('pages/index', {
    drinks,
    tagline
  });
});

// about page
app.get('/about', (req,res) => {
  res.render('pages/about');
});

app.listen(PORT, () => {
  console.log(`Tuned in and listening on Port ${PORT}`);
});
