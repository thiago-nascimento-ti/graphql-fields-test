const { app } = require('./src/app')
const { server } = require('./json-server')

app.listen(4000, () => {
    console.log(`### GraphQL started at: http://localhost:4000/`);
});

server.listen(3000, () => {
    console.log(`### JsonServer started at: http://localhost:3000/`);
})  