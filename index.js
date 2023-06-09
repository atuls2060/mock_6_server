const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var cors = require('cors')
server.use(cors())

server.use(middlewares)
server.use(router)
const PORT = 8080
server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`)
})