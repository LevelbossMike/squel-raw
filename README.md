# squel-raw

This project is an extension to the [squel](http://hiddentao.github.io/squel/)
library. Its only purpose is to add the functionality to squel to create raw
sql-statements that can be used by the
[mod-mysql-postgresql](https://github.com/vert-x/mod-mysql-postgresql)
vert.x-module directly.

To use this in your code you simply require squel-raw instead of squel.

```js
var squel = require('squel-raw')
  .useFlavour(<flavorToUse>);

squel.select().from('table').toRaw();
// => { "action": "raw", "command": "SELECT * from table;" }
```
