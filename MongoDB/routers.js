var express = require("express");
var router = express.Router();

const Post = require("./modules/Post.js");

router.get("/posts_find", async function (req, res) {
  const posts = await Post.find();
  res.send(posts);
});

// GET: 127.0.0.1:3000/api/posts_find
// Ouput: []

// Add (Create) the database documents and collections.........
router.post("/posts_add", async function (req, res) {
  const post = new Post({
    title: req.body.title,
    age: req.body.age,
    content: req.body.content,
  });

  await post.save();
  res.send(post);
});

// POST: 127.0.0.1:3000/api/posts_add
// {
//     "title": "Muhammad Allah Rakha",
//     "age": 22,
//     "content": "Peshawar"
// }

// Response:
// {
//     "title": "Muhammad Allah Rakha",
//     "age": 22,
//     "content": "Peshawar",
//     "_id": "626d18e82899c49ba9763d0e",
//     "__v": 0
//   }

// Get individual post (Finde the specific values).............
router.get("/posts_find_one/:content", async function (req, res) {
  try {
    const post = await Post.findOne({ content: req.params.content });
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Posts doesn't exist!" });
  }
});

// GET: 127.0.0.1:3000/api/posts_find_one/Peshawar
// Response;
// {
//     "_id": "626d18e82899c49ba9763d0e",
//     "title": "Muhammad Allah Rakha",
//     "age": 22,
//     "content": "Peshawar",
//     "__v": 0
//   }

// Update the posts documents of fields........
router.patch("/posts_update/:content", async function (req, res) {
  try {
    const post = await Post.findOne({ content: req.params.content });
    if (req.body.title) {
      post.title = req.body.title;
    }
    if (req.body.age) {
      post.age = req.body.age;
    }
    if (req.body.content) {
      post.content = req.body.content;
    }
    await post.save();
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

// PATCH: 127.0.0.1:3000/api/posts_update/Peshawar
// Original Response;
// {
//     "_id": "626d18e82899c49ba9763d0e",
//     "title": "Muhammad Allah Rakha",
//     "age": 22,
//     "content": "Peshawar",
//     "__v": 0
//   }

// Json Content
// {
//     "title": "Hassan Raza",
//     "age": 20,
//     "content": "Multan"
// }

// Update Response;
// {
//     "_id": "626d18e82899c49ba9763d0e",
//     "title": "Hassan Raza",
//     "age": 20,
//     "content": "Multan",
//     "__v": 0
//   }

// Delete the documents (all fields are delete.) ...........
router.delete("/posts_delete/:id", async function (req, res) {
  try {
    await Post.deleteOne({ id: req.params.id });
    res.status(204).send("Delete the documents of fields.");
    // await post.save();
  } catch {
    res.status(404);
    res.send("Post doesn't exist.");
  }
});

// DELETE: 127.0.0.1:3000/api/posts_delete/626d18e82899c49ba9763d0e

module.exports = router;
