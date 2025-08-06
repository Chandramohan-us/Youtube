const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const upload = require('../middleware/upload');

// Video routes
router.post('/upload', upload.single('video'), videoController.uploadVideo);
router.get('/', videoController.getAllVideos);
router.get('/:id', videoController.getVideoById);
router.get('/search/:query', videoController.searchVideos);

module.exports = router;
