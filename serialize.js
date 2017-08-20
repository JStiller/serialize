var jstiller = jstiller || {};
jstiller.modules = jstiller.modules || {};

jstiller.modules.serialize = (function (dependency) {
  function object(deliveredObject) {
    var estimatedkv = [];

    if (deliveredObject) {
      deliveredObject.keys().forEach(function (key, value) {
        estimatedkv.push(dependency.window.encodeURIComponent(key).concat('=', dependency.window.encodeURIComponent(value)));
      });
    }

    estimatedkv = estimatedkv.join('&');

    return estimatedkv;
  }

  return {
    object: object,
  };
}({
  window: window,
}));
