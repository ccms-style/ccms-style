var connect = require('connect');
var app = connect().use(connect.static('./'));
app.listen(3300);