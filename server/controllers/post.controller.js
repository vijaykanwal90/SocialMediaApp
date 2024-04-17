import Post from "../models/post.model.js"
import User from "../models/user.model.js"

// creating posts
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.location,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post)


    } catch (error) {
        res.status(409).json({ message: error.message + " error in creating post" })
    }
}

// read posts

export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();

        res.status(200).json(post)

    } catch (error) {
        res.status(409).json({ message: error.message + " error in post feed" })


    }
}
console.log(getFeedPosts)
export const getUserPosts = async (req, res) => {
    try {

        const { userId } = req.params
        const post = await Post.find({ userId });
        res.status(200).json(post);

    } catch (error) {
        res.status(409).json({ message: error.message + " error in getting user post or  feed" })

    }
}

// update comments 

export const likePost = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req.body
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);

        if (isLiked) {
            post.likes.delete(userId);
        }
        else {
            post.likes.set(userId, true);
        }

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {
                likes: post.likes
            }, {
            new: true
        }
        )
        res.status(200).json(updatedPost);

    } catch (error) {

    }
}