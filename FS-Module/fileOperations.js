// fileOperations.js
const fs = require("fs");

function createFile(fileName, newCode) {
    fs.writeFile(fileName, newCode, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File created successfully!");
        }
    });
}

function readFile(fileName) {
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}

function renameFile(oldName, newName) {
    fs.rename(oldName, newName, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Renamed successfully!");
        }
    });
}

function updateFile(fileName, content) {
    fs.appendFile(fileName, content, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Content appended successfully!");
        }
    });
}

function deleteFile(fileName) {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File deleted successfully!");
        }
    });
}

module.exports = {
    createFile,
    readFile,
    renameFile,
    updateFile,
    deleteFile,
};
