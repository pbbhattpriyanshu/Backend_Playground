const app = require('./src/app');
require('dotenv').config();
const connectDB = require('./src/config/db.config');

const PORT = process.env.PORT || 5000;

connectDB();





app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
})