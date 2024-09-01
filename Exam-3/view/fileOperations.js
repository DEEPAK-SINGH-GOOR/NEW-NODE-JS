const fs = require('fs');
const path = require('path');

const createFile = (filePath, content) => {
    fs.writeFileSync(filePath, content, 'utf8');
};

const readFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
};

const updateFile = (filePath, content) => {
    fs.writeFileSync(filePath, content, 'utf8');
};

const deleteFile = (filePath) => {
    fs.unlinkSync(filePath);
};

const createFolder = (folderPath) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
};

module.exports = {
    createFile,
    readFile,
    updateFile,
    deleteFile,
    createFolder
};
