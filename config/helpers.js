var path = require('path');

const EVENT = process.env.npm_lifecycle_event || '';

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function isWebpackDevServer() {
    return process.argv[1] && !!(/webpack-dev-server/.exec(process.argv[1]));
}

var root = path.join.bind(path, ROOT);

exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
