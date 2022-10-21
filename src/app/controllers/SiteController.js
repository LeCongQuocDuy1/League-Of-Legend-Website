class SiteController {

    // [GET] /search
    search(req, res) {
        res.render('search');
    }

    // [GET] /
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;