const moment = require("moment");

let formatMessage = (username, text) => {
  return {
    username,
    text,
    time: moment().format("LT"),
  };
};

module.exports = formatMessage;
