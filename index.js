const parser = require('html2json-parser')
module.exports = function (source) {
    if (this.cacheable) this.cacheable();
  
    var value = typeof source === "string" ? parser.HTMLtoJSON(source) : source;
   
    return `module.exports = ${value}`;
  }