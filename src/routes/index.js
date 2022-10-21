const siteRouter = require('./site');
const postsRouter = require('./post');

function routes(app) {
    
    app.use('/posts', postsRouter);
    app.use('/', siteRouter);
}

module.exports = routes;