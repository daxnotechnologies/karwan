const videos = require("../models/videos.models");

//////////////////////////////////////////////////////////////////////////////
async function addVideo(req, res) {
  const { videoLink } = req.body;
  try {
    const preVideo = await videos.findOne({ videoLink: videoLink });
    console.log(preVideo);
    if (preVideo) {
      res.status(404).send("This video already exists");
    } else {
      const addVideo = new videos({
        videoLink,
      });
      await addVideo.save();
      res.status(201).json(addVideo);
      console.log(addVideo);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getVideos(req, res) {
  try {
    const videosData = await videos.find();
    res.status(200).json(videosData);
    console.log(videosData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleVideo(req, res) {
  const videoId = req.params.id;
  try {
    const videoData = await videos.findById(videoId);
    res.status(200).json(videoData);
    console.log(videoData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteVideo(req, res) {
  const videoId = req.params.id;
  try {
    await videos.findByIdAndDelete(videoId);
    res.status(201).json({ msg: "Video Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = { getVideos, getSingleVideo, addVideo, deleteVideo };
