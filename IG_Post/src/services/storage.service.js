const { ImageKit } = require('@imagekit/nodejs');
require('dotenv').config();

// Initialize ImageKit with your credentials
const imagekit  = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
})

// Function to upload a file
async function uploadFile(buffer, filename) {
    try {
        const result = await imagekit.files.upload({
            file: buffer.toString('base64'), // Convert buffer to base64 string
            fileName: filename,
        });
        
        return result;

    } catch (error) {
        throw error;
    }
}

module.exports = uploadFile;