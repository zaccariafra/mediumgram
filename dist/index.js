"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _telegraf = _interopRequireDefault(require("telegraf"));

var _rssParser = _interopRequireDefault(require("rss-parser"));

var _en = _interopRequireDefault(require("../resources/content/en.json"));

var bot = new _telegraf.default(process.env.TELEGRAF_TOKEN);
var parser = new _rssParser.default();
bot.hears(/\/start/, function (msg) {
  return msg.replyWithMarkdown(_en.default.start);
});
bot.hears(/\/help/, function (msg) {
  return msg.replyWithMarkdown(_en.default.help);
});
bot.hears(/\/user (.+)/, function (msg) {
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var feed, posts;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return parser.parseURL("https://medium.com/feed/@".concat(msg.match[1]));

          case 3:
            feed = _context.sent;
            posts = feed.items.filter(function (item) {
              return typeof item.categories !== 'undefined' && item.categories.length > 0;
            });
            posts.forEach(function (item) {
              return msg.reply(item.link);
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log("User", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }))();
});
bot.hears(/\/user/, function (msg) {
  return msg.replyWithMarkdown(_en.default.user);
});
bot.hears(/\/publication (.+)/, function (msg) {
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2() {
    var feed, posts;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return parser.parseURL("https://medium.com/feed/".concat(msg.match[1]));

          case 3:
            feed = _context2.sent;
            posts = feed.items.filter(function (item) {
              return typeof item.categories !== 'undefined' && item.categories.length > 0;
            });
            posts.forEach(function (item) {
              return msg.reply(item.link);
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log("Publication", _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }))();
});
bot.hears(/\/publication/, function (msg) {
  return msg.replyWithMarkdown(_en.default.publication);
});
bot.hears(/\/custom (.+)/, function (msg) {
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    var feed, posts;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return parser.parseURL("https://".concat(msg.match[1], "/feed/"));

          case 3:
            feed = _context3.sent;
            posts = feed.items.filter(function (item) {
              return typeof item.categories !== 'undefined' && item.categories.length > 0;
            });
            posts.forEach(function (item) {
              return msg.reply(item.link);
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log("Custom", _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }))();
});
bot.hears(/\/custom/, function (msg) {
  return msg.replyWithMarkdown(_en.default.custom);
});
bot.hears(/\/tag (.+)/, function (msg) {
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4() {
    var feed, posts;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return parser.parseURL("https://medium.com/feed/tag/".concat(msg.match[1]));

          case 3:
            feed = _context4.sent;
            posts = feed.items.filter(function (item) {
              return typeof item.categories !== 'undefined' && item.categories.length > 0;
            });
            posts.forEach(function (item) {
              return msg.reply(item.link);
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log("Tag", _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }))();
});
bot.hears(/\/tag/, function (msg) {
  return msg.replyWithMarkdown(_en.default.tag);
});
bot.hears(/\/tagged (.+)/, function (msg) {
  (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5() {
    var elements, feed, posts;
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            elements = msg.match[1].split(' ');
            _context5.prev = 1;
            _context5.next = 4;
            return parser.parseURL("https://medium.com/feed/".concat(elements[0], "/tagged/").concat(elements[1]));

          case 4:
            feed = _context5.sent;
            posts = feed.items.filter(function (item) {
              return typeof item.categories !== 'undefined' && item.categories.length > 0;
            });
            posts.forEach(function (item) {
              return msg.reply(item.link);
            });
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            console.log("Tagged", _context5.t0);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 9]]);
  }))();
});
bot.hears(/\/tagged/, function (msg) {
  return msg.replyWithMarkdown(_en.default.tagged);
});
bot.launch();