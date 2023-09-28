const express=require('express');
const app=express();
const mongoose=require('mongoose');
const routesUrls=require('./router/routes');

const cors=require('cors');
if(mongoose.connect('mongodb+srv://meenal-sekar:1805vishu@cluster0.vskqmqg.mongodb.net/final-db?retryWrites=true&w=majority'))
{
    console.log('database is connected');
}
app.use(express.json());
app.use(cors())

app.use('/app',routesUrls);

app.listen(4000,()=>
{
console.log("Server is connected successfully");
});




