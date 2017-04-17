/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-04-17
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
