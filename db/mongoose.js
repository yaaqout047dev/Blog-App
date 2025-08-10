const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yaaqout8tareq:nkenegmCovedDmW5@cluster0.o8d2q.mongodb.net/blog-data?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });