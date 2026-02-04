const app = require('./src/app'); // Import the Express app instance
require('dotenv').config();
const connect = require('./src/database/db'); // Import the database connection function

const PORT = process.env.PORT || 4000;

// Connect to the database
connect();



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});