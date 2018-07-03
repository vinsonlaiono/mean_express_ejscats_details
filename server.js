var express = require('express');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/views"));

app.get('/', function(request, response) {
    response.render('index.html');
})

app.get('/details/1', function(request, response) {
    var cat_details =[
        {image : '/images/lion.jpg', name: 'Lion',fav_food: 'monkeys', age: '3', sleep: ['caves', 'trees']}
    ]
    response.render('details.ejs', {cat: cat_details})
})
app.get('/details/2', function(request, response) {
    var cat_details =[
        {image : '/images/tiger.jpg', name: 'Tiger',fav_food: 'Apes', age: '5'}
    ]
    response.render('details.ejs', {cat: cat_details})
})
app.get('/details/3', function(request, response) {
    var cat_details =[
        {image : '/images/panther.jpg', name: 'Panther',fav_food: 'hogs', age: '3'}
    ]
    response.render('details.ejs', {cat: cat_details})
})


app.listen(8000, function() {
    console.log("listening on port 8000");
})

