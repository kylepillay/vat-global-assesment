const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/search/quotes', 'quotes'],
    createProxyMiddleware({
      target: 'https://api.quotable.io',
      changeOrigin: true,
    })
  );
};
