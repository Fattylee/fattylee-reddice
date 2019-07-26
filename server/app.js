"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, './index.html'));
});
app.get('/api', function (req, res) {
  res.send('happy api');
});
var port = process.env.PORT || 7000;
app.listen(port, console.log('Server running on port', port));
