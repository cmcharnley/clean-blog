const express = require('express');  
const path = require ('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const BlogPost = require('./models/BlogPost.js');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

const app = new express();
const ejs = require('ejs'); 
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({})
    console.log(blogposts)
    // res.sendFile(path.resolve(__dirname, 'pages/index.html')) this is old express stuff
    res.render('index', {
        blogposts
    });
})

app.get('/about', (req, res) => {
    res.render('about'); 
})

app.get('/post', (req, res) => {
    res.render('post'); 
})

app.get('/contact', (req, res) => {
    res.render('contact'); 
})

app.get('/posts/new', (req, res) => {
    res.render('create'); 
})

app.post('/posts/store', (req, res) => {
    BlogPost.create(req.body, (error, blogpost) => {
        res.redirect('/')
    })
})

app.listen(4000, () => {
    console.log('App listening on port 4000')
})