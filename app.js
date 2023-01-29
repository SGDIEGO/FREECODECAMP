const server = require('./www/server.js');

server.listen(server.get("PORT"), () => {
    console.log(`Server runing on: http://localhost:${server.get("PORT")}`);
});
