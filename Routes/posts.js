const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const auth_m = require('../middleware/auth_m');

const Post = require('../Models/postModel');
const Profile = require('../Models/profileModel');
const User = require('../Models/userModel');

router
  .route('/posts')
  .post(
    [auth_m, [body('text', 'Text required!').not().isEmpty()]],
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const user = await User.findById(req.user.id).select('-password');

        const newPost = new Post({
          text: req.body.text,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id,
        });

        const post = await newPost.save();

        res.json(post);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
      }
    }
  );

//Get all the posts
router.route('/posts').get(auth_m, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

//Get post by ID
router.route('/posts/:id').get(auth_m, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).send('Profile not found!');
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).send('Profile not found!');
    }
    res.status(500).send('Server error!');
  }
});

//Delete post by ID
router.route('/posts/:id').delete(auth_m, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).send('Profile not found!');
    }
    if (post.user.toString() !== req.user.id) {
      return res.status(401).send('User not authorized!');
    }

    await post.remove();

    res.json('Post removed!');
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).send('Profile not found!');
    }
    res.status(500).send('Server error!');
  }
});

//Add likes
router.route('/posts/:id/likes').put(auth_m, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).send('Profile not found!');
    }

    //check if already liked
    let likedByU = post.likes.filter(
      (like) => like.user.toString() === req.user.id
    );
    if (likedByU.length > 0) {
      return res.status(400).json('Post is already liked by you!');
    }

    post.likes.unshift({ user: req.user.id });
    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).send('Profile not found!');
    }
    res.status(500).send('Server error!');
  }
});

//Remove likes
router.route('/posts/:id/likes').delete(auth_m, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(400).send('Profile not found!');
    }

    //check if already liked
    let likedByU = post.likes.filter(
      (like) => like.user.toString() === req.user.id
    );

    if (likedByU.length === 0) {
      return res.status(400).json('Post has not yet been liked by you!');
    }

    const removeIndex = post.likes.map((like) =>
      like.user.toString().indexOf(req.user.id)
    );

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).send('Profile not found!');
    }
    res.status(500).send('Server error!');
  }
});

//Add comment
router
  .route('/posts/:id/comments')
  .post(
    [auth_m, [body('text', 'Text required!').not().isEmpty()]],
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id);

        const newCom = {
          text: req.body.text,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id,
        };

        post.comments.unshift(newCom);
        await post.save();

        res.json(post);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error!');
      }
    }
  );

//Delete comment
router
  .route('/posts/:id/comments/:commentId')
  .delete(auth_m, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(400).send('Post not found!');
      }

      let comment = post.comments.find(
        (comment) => comment.id === req.params.commentId
      );

      if (!comment) {
        return res.status(404).send('Comment not found!');
      }

      if (comment.user.toString() !== req.user.id) {
        return res.status(401).send('User not authorized!');
      }

      const removeIndex = post.comments.map((comment) =>
        comment.user.toString().indexOf(req.user.id)
      );

      post.comments.splice(removeIndex, 1);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      if (err.kind == 'ObjectId') {
        return res.status(404).send('Profile not found!');
      }
      res.status(500).send('Server error!');
    }
  });

module.exports = router;
