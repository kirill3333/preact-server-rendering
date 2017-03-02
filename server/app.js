const express = require('express')
const app = express()
const h = require('preact').h
const render = require('preact-render-to-string')
const Zone = require("can-zone");

const appComponent = require('./../dist/app').AppComponent


app.use(express.static('build'))

app.get('/', function (req, res) {

  /*new Zone().run(() => {
    return h(appComponent)
  }).then(virtualDom => {
    let html = render(virtualDom.result)
    res.send(html)
  })*/
  let virtualDom = h(appComponent)
  let html = render(virtualDom)
  res.send(html)
})

app.listen(3003, function () {
  console.log('Static server started on localhost:3003')
})