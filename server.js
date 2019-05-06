const express =require('express');
const movieRouter=require('movie');

const app=express();
app.use(alert);

app.use(movieRouter);

app.listen(4000,'0.0.0.0',()=>{
    console.log('listening to port 4000');
});