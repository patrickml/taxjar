Taxjar = Npm.require('taxjar');

TaxjarConnect = function (key) {
  var TaxjarObj;
  var resources = [
    'categories',
    'ratesForLocation',
    'createOrder',
    'updateOrder'
  ];

  TaxjarObj = new Taxjar(key);

  Future = Npm.require('fibers/future');

  /**
   * Create a function to wrap the promise function `then` in a fiber
   * @param method
   * @param config
   * @returns {*}
   */
  TaxjarObj.sync = function (method, config) {
    var fut = new Future();
    var self = this;

    //Call the function in the TaxJar API
    self[method](config || {}).then(function (res) {
      fut.return(res);//Return the result
    });

    return fut.wait();//Return the result

  };

  return TaxjarObj;
};
