const request = require("request-promise");
const querystring = require("querystring");
require("dotenv").config();
module.exports = async id => {
  const content = {
    uuid: process.env.FETCHUUID,
    userID: id
  };

  var data = querystring.stringify(content);
  var contentLength = data.length;
  const url = `https://kantibot.glitch.me/userguildUpdateWebServerf9a0e14f-a96b-4763-a73d-7fe4ad2fe3ba`;

  var hi;
  const kys = request({
    headers: {
      "Content-Length": contentLength,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    uri: url,
    body: data,
    method: "POST"
  }).then(body => {
    return body;
  });

  return kys;
};
