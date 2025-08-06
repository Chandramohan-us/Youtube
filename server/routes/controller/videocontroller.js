const Video = require('../models/Video');
const fs = require('fs');
const path = require('path');

exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No video file uploaded' });
    }

    const { title, description } = req.body;
    const videoUrl = `/uploads/${req.file.filename}`;

    const newVideo = new Video({
      title,
      description,
      videoUrl,
      uploadDate: new Date(),
      views: 0,
      likes: 0,
      channel: req.user ? req.user.username : 'Anonymous',
    });

    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ uploadDate: -1 });
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    
    res.json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.searchVideos = async (req, res) => {
  try {
    const query = req.params.query;
    const videos = await Video.find({
      title: { $regex: query, $options: 'i' }
    });
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
