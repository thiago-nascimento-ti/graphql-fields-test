const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/books', (req, res, next) => {
    const genreLimit = req.query['genre._limit'];
    if (genreLimit) {
        const render = res.jsonp.bind(res);
        res.jsonp = (books) => {
            render(books.map(book => {
                const genre = book.genre.filter((_, index) => index < genreLimit);
                return {
                    ...book,
                    genre
                }
            }))
        }
    }
    next();
})

server.use(router)

module.exports = {
    server
}

