// Import the Sequelize class from the sequelize package
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with database connection parameters
// Here, we're connecting to a MySQL database named 'hopi' with username 'root' and no password
const sequelize = new Sequelize('hopi', 'root', null, {
    host: 'localhost', // Database host
    dialect: 'mysql', // Database dialect (e.g., mysql, postgres, sqlite)
    logging: false, // Disable logging SQL queries
});

// Define a function to connect to the database asynchronously
let connectDB = async () => {
    try {
        // Use Sequelize's authenticate() method to test the connection
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        // If there's an error connecting to the database, log the error
        console.error('Unable to connect to the database:', error);
    }
}

// Export the connectDB function so it can be used in other files
module.exports = connectDB;
