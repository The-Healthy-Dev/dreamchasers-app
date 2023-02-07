import LogT from 'logt'

let logger
if (process.env.NODE_ENV === 'production') {
  logger = new LogT('error') // or logger = new LogT("none");
} else {
  logger = new LogT('silly')
}

// See documentation for `readConsole()` for usage
// uncomment following line if you want to override default console methods
// logger.readConsole();

export default logger
