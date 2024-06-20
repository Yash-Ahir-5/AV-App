const Audio = require('../models/AudioModel');
const path = require('path');
const jwt = require('jsonwebtoken');

const uploadAudio = async (req, res) => {
    console.log(req.user.id);
    try {
        const { title, artist, writer } = req.body;

        if (!req.files || !req.files.thumbnail || !req.files.audioFile) {
            return res.status(400).json({ error: 'Thumbnail and audio file are required' });
        }

        const thumbnail = req.files.thumbnail[0].path;
        const audioFile = req.files.audioFile[0].path;

        const newAudio = await Audio.create({
            title,
            artist,
            writer,
            thumbnail,
            audioFile,
            createdBy: req.user.id
        });

        res.status(201).json({ message: 'Audio uploaded successfully', audio: newAudio });
    } catch (error) {
        console.error('Error uploading audio:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    uploadAudio
}