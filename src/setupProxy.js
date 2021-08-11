const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/quotes', 'random'],
    createProxyMiddleware({
      target: 'https://api.quotable.io',
      changeOrigin: true,
    })
  );
};
