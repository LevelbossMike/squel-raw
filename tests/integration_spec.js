var expect = require('expect.js');
var squel = require('../squel-raw.js');

describe('squel-raw', function() {
  describe('#toRaw', function() {
    it('returns objects that can be used by mod-mysql-postgresql directly', function() {
      var sql = squel.select().from('table');
      var actual = sql.toRaw();
      var expected = {
        "action": "raw",
        "command": "SELECT * FROM table;"
      }

      expect(actual).to.eql(expected);
    });
  });
});
