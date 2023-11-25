
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.7ef8a729fddac56ff74d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.latest.pt-BR.17804cd5078a63a43afb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/441.latest.pt-BR.04eff29e3df2d466c911.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.pt-BR.ddd75fd2e8c8eae70b32.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.dd84e02d8d6f8c21a0d4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.pt-BR.13d4de92b88330e8fea9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.latest.pt-BR.b76834e73689753fbe44.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.pt-BR.7fcd45ae446a9a5574e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.latest.pt-BR.b14f454b47fde37b6f0e.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.latest.pt-BR.4685743ee2b9594f0e56.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.e73cab4b1bb1fcdbd393.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.latest.pt-BR.5f60c0e91d9d5d6ad7d1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.latest.pt-BR.0cbd326b7e71017ec76e.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  