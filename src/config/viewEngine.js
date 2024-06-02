//import express
import express from "express"
let configViewEngine = (app) => {
    //arrow function
    //can only take from this url
    app.use(express.static("./src/public"));
    app.set('view engine', 'ejs'); //jsp, blade
    app.set('views', './src/views');
}
//allow other files can use this function
module.exports = configViewEngine