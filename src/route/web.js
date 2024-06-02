// Import the Express module and its response object.
import express from 'express';
import homeController from '../controllers/homeController';

// Create a new router object to handle routes for our application.
let router = express.Router();

// Define a function to initialize web routes and attach them to the provided app.
let initWebRoutes = (app) => {
    // Define a route for the root URL ('/') that sends 'Hello World' as the response.
    router.get('/', homeController.getHomePage);

    // Use the router middleware in the app, starting from the root path.
    return app.use('/', router);
}

// Export the initWebRoutes function so it can be used in other files.
module.exports = initWebRoutes;
