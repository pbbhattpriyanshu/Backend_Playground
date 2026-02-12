const app = require('./src/app');
const connect = require('./src/config/db.config');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
connect();





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});