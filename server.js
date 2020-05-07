const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(require, response){
  return response.render("about")
})

server.get("/portifolio", function(require, response){
  return response.render("portifolio")
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function(){
  console.log('server is running')
})

