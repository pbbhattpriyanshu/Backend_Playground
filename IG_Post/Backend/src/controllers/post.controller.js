const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");

export const createPost = async (req, res) => {
  try {
    const result = await uploadFile(req.file.buffer, req.file.originalname);

    const newPost = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    });

    res
      .status(200)
      .json({ message: "Post created sucessfully", post: newPost });
  } catch (error) {
    console.log(`Error in Post Create Controller ${error}`);
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find();

    res
      .status(200)
      .json({ message: "Posts retrieved successfully", posts: posts });
  } catch (error) {
    console.log(`Error in Get Post Controller ${error}`);
  }
};
