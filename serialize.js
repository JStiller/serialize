var jstiller = jstiller || {};
jstiller.modules = jstiller.modules || {};

jstiller.modules.serialize = (function (dependency) {
  function object(deliveredObject) {
    var estimatedkv = [];
    if(deliveredObject) {
      for(var key in deliveredObject) {
        if(deliveredObject.hasOwnProperty(key)) {
          estimatedkv.push(dependency.window.encodeURIComponent(key).concat('=', dependency.window.encodeURIComponent(deliveredObject[key])))
        }
      }
    }

    estimatedkv = estimatedkv.join('&');

    return estimatedkv;
  }

  return {
    object: object,
  }
}({
  window: window,
}));
