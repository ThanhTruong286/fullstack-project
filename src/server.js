import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import iniWebRoutes from './route/web';
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
iniWebRoutes(app);

let port = process.env.PORT || 6969;
//if port undefined => port = 6969
app.listen(port, () => {
    //callback
    console.log('Is running on port: ' + port);
})