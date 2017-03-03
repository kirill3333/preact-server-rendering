const express = require('express')
const app = express()
const h = require('preact').h
const render = require('preact-render-to-string')
const Zone = require("can-zone");

const appComponent = require('./../dist/app').RootComponent


app.use(express.static('build'))

app.get('/', function (req, res) {
  let virtualDom = h(appComponent)
  let html = ''
  render(virtualDom).then((result) => {
    html = result
    res.send(html)
  })

})

app.listen(3003, function () {
  console.log('Static server started on localhost:3003')
})