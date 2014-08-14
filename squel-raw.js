var squel = require('./node_modules/squel/squel.js');

module.exports = (function() {
  squel.cls.QueryBuilder.prototype.toRaw = function() {
    var raw = this.toString();
    return {
      "action": "raw",
      "command": raw + ';'
    };
  };

  return squel;
})();
