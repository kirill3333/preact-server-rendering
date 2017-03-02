const express = require('express')
const app = express()
const h = require('preact').h
const render = require('preact-render-to-string')
const Zone = require("can-zone");

const appComponent = require('./../dist/app').AppComponent


app.use(express.static('build'))

app.get('/', function (req, res) {
  let virtualDom = h(appComponent)
  new Zone().run(() => {
    let html = render(virtualDom)
  }).then((zone) => {
    res.send(zone.result)
  })
})

app.listen(3003, function () {
  console.log('Static server started on localhost:3003')
})