const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

// Create logs directory if it doesn't exist
const logsDir = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Create a write stream for access logs
const accessLogStream = fs.createWriteStream(
  path.join(logsDir, 'access.log'), 
  { flags: 'a' }
);

// Define a custom log format with additional details
morgan.token('body', (req) => JSON.stringify(req.body));
morgan.token('params', (req) => JSON.stringify(req.params));
morgan.token('query', (req) => JSON.stringify(req.query));

const detailedFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms - params: :params - query: :query - body: :body';

// Create logger middleware
const logger = morgan(detailedFormat, {
  stream: accessLogStream,
  skip: (req) => process.env.NODE_ENV === 'test'
});

// Create console logger for development
const consoleLogger = morgan(detailedFormat);

module.exports = { 
  fileLogger: logger,
  consoleLogger
};
