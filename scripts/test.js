const path = require("path");
require("ts-node").register({
  project: path.join(__dirname, "..", "src", "tsconfig.json")
});
require("../src/glue");
require("../src");
