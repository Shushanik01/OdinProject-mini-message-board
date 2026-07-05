import express from 'express';

const app = express();
import router  from './router/router.js';
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(router);

let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});