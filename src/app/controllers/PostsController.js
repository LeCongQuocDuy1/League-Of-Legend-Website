class PostsController {

    // [GET] /posts:slug
    show(req, res) {
        res.send("POST DETAIL");
    }

    // [GET] /posts
    index(req, res) {
        res.render("post");
    }
}

module.exports = new PostsController;