// Load widget globally on all pages
(function (w, d, i) {
  w._settings = {
    site: i,
    baseUrl: 'https://vueclick.com'
  };
  var h = d.getElementsByTagName('head')[0];
  var s = d.createElement('script');
  s.async = 1;
  s.src = 'https://vueclick.com/widget.js';
  s.crossOrigin = 'anonymous';
  h.appendChild(s);
})(window, document, 'a0d54c09-1cc3-4b24-b554-6f81206fa384');
