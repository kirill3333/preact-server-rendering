const express = require('express')
const app = express()
const h = require('preact').h
const render = require('preact-render-to-string')
const Zone = require("can-zone");

const rootComponent1 = require('./../dist/app').RootComponent1
const rootComponent2 = require('./../dist/app').RootComponent2


app.use(express.static('build'))

app.get('/root1', function (req, res) {
  console.log('http request')
  let virtualDom = h(rootComponent1)
  console.log('virtualDom')
  let html = ''
  render(virtualDom).then((result) => {
    console.log('rendered html')
    html = result
    res.send(html)
  })

})

app.get('/root2', function (req, res) {
  console.log('http request')
  let virtualDom = h(rootComponent2)
  console.log('virtualDom')
  let html = ''
  render(virtualDom).then((result) => {
    console.log('rendered html')
    html = result
    res.send(html)
  })

})

app.listen(3003, function () {
  console.log('Static server started on localhost:3003')
})