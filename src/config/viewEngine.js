// Import the Express module
import express from "express"

// Define a function to configure the view engine for the app
let configViewEngine = (app) => {
    // Use the static middleware to serve static files from the specified directory
    // Only files from the "./src/public" directory can be accessed
    app.use(express.static("./src/public"));

    // Set the view engine to 'ejs', which allows using .ejs files for templates
    // Other options could be 'jsp', 'blade', etc.
    app.set('view engine', 'ejs');

    // Set the directory where the view templates are located
    app.set('views', './src/views');
}

// Export the configViewEngine function so it can be used in other files
module.exports = configViewEngine
