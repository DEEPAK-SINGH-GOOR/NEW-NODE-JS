const express = require('express');
const { createFile, readFile, updateFile, deleteFile, createFolder } = require('../view/fileOperations');
const path = require('path');
const router = express.Router();

router.post('/create', (req, res) => {
    const { filename, content } = req.body;
    const filePath = path.join(__dirname, '..', filename);
    createFile(filePath, content);
    res.send('File created successfully');
});

router.get('/read', (req, res) => {
    const { filename } = req.query;
    const filePath = path.join(__dirname, '..', filename);
    const content = readFile(filePath);
    res.send(content);
});

router.put('/update', (req, res) => {
    const { filename, content } = req.body;
    const filePath = path.join(__dirname, '..', filename);
    updateFile(filePath, content);
    res.send('File updated successfully');
});

router.delete('/delete', (req, res) => {
    const { filename } = req.body;
    const filePath = path.join(__dirname, '..', filename);
    deleteFile(filePath);
    res.send('File deleted successfully');
});

router.post('/create-folder', (req, res) => {
    const { folderName } = req.body;
    const folderPath = path.join(__dirname, '..', folderName);
    createFolder(folderPath);
    res.send('Folder created successfully');
});

module.exports = router;
