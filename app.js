const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const hbs = require("hbs");
const port = process.env.PORT || 5501;
dotenv.config({ path: './.env' });


const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
console.log(publicDirectory);

//parse url-encoded bodies (html form :v)
app.use(express.urlencoded({ extended: false }));
//lo convierte en json
app.use(express.json());


//Descomentar para usar HBS

hbs.registerPartials(__dirname + '/views/partials');
//hbs.registerHelper(require("./views/helpers/miHelper"));
app.set('view engine', 'hbs');

//define routes

app.use('/', require('./routes/pages'));

app.use((req, res, next) => {
    res.status(404).render('index.hbs');
});

app.listen(port, () => {
    console.log("Server started on port "+port);
});
