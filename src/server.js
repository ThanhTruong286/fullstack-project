// Import the Express module
import express from 'express';

// Import the body-parser module for parsing request bodies
import bodyParser from 'body-parser';

// Import the custom view engine configuration
import viewEngine from './config/viewEngine';

// Import the custom route configurations
import iniWebRoutes from './route/web';

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Initialize the Express application
let app = express();

// Configure the app to use body-parser middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Configure the app to use body-parser middleware for parsing URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Configure the view engine and static files directory using the custom viewEngine function
viewEngine(app);

// Initialize the web routes using the custom iniWebRoutes function
iniWebRoutes(app);

// Set the port for the application to listen on
// Use the port specified in the environment variables, or default to 6969 if not defined
let port = process.env.PORT || 6969;

// Start the application and listen for incoming requests on the specified port
app.listen(port, () => {
    // Callback function to run when the server starts successfully
    console.log('Is running on port: ' + port);
});
