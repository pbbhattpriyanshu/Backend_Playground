const ImageKit = require('imagekit');

// Initialize ImageKit with your credentials
const imagekit  = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
})

// Function to upload a file
async function uploadFile(buffer, filename) {
    try {
        const result = await imagekit.upload({
            file: buffer,
            fileName: filename,
        });
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = uploadFile;