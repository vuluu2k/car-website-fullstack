const express = require('express');
const app = express();
const db = require('./config/db');
db.connect();
const route = require('./routes');
const port=process.env.PORT||5000;


app.use(express.json());




route(app);

app.listen(port, ()=>console.log(`server run in http://localhost:${port}`))