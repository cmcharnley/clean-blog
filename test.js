const mongoose = require ('mongoose'); 

const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

BlogPost.create({
    title: 'The Mythbusters Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.  Energy-saving is on of my favourite money topics because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up.  You know those bullet-point lists. You start spotting them on everything this time of year. They go like this:'
}, (error, blogpost) => {
    console.log(error, blogpost)
});

BlogPost.create({
    title: 'Working 9 to 5',
    body: 'Tumble outta bed and I stumble to the kitchen, Pour myself a cup of ambition, Yawn and stretch and try to come to life, Jump in the shower and the blood starts pumpin, Out on the street the traffic starts jumpin, With folks like me on the job from 9 to 5'
}, (error, blogpost) => {
    console.log(error, blogpost)
}); 

// BlogPost.find({title: /9 to 5/}, (error, blogpost) => {
//     console.log(error, blogpost)
// })

var id = '5eb7d54562968e1f5cacd9d7'

BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost)
})