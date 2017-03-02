'use strict'
const path = require('path')
const fs = require('fs');
const _ = require('lodash');

const ROOT = path.resolve(__dirname, '..')

console.log('root directory:', root() + '\n')
console.log('src app directory:', root('src', 'app') + '\n')

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [ROOT].concat(args))
}

function buildNodeExternals(externals) {
  let nodeModules = {};
  fs.readdirSync('node_modules')
    .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    });

  if (externals && _.isPlainObject(externals)) {
    _.extend(nodeModules, externals);
  }

  return nodeModules;
}

module.exports = {
  hasProcessFlag,
  root,
  buildNodeExternals
}