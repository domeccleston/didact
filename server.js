const express = require('express');

const server = express();

server.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});