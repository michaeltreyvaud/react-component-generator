class Logger {
  constructor(logger = console) {
    this.logger = logger;
  }

  log(params) {
    this.logger.log(params);
  }
}

module.exports = Logger;
