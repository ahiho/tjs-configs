const path = require("path");

const getConsumingRoot = () => path.resolve(process.cwd());

module.exports = { getConsumingRoot };
