# TaxJarConnect #

A wrapper for Meteor style synchronous TaxJar API calls.

## Example Usage ##

```javascript
Meteor.methods({

  salesTax : function () {
    var taxJar = new TaxjarConnect("aa853bb5e5e1ae317487a63d0a3d59c8");
    var rates = taxJar.sync('ratesForLocation', 90002);
    return rates;
  }
  
  });
```

## Wrapped API ##

This package wraps the methods below. These are all the methods that are listed in the [taxjar-node](https://github.com/taxjar/taxjar-node) github documentation & the [taxjar-website](http://developers.taxjar.com/api/?javascript) documentation.

 * List tax categories
  * [`taxJar.sync('categories')`](http://developers.taxjar.com/api/?javascript#categories)
 * Gets rates for location
  * [`taxJar.sync('ratesForLocation', 90002)`](http://developers.taxjar.com/api/?javascript#rates)
 * Gets tax for an order
  * [`taxJar.sync('taxForOrder', params)`](http://developers.taxjar.com/api/?javascript#show-tax-rates-for-a-location)
 * Creates an order
  * [`taxJar.sync('createOrder', params)`](http://developers.taxjar.com/api/?javascript#create-an-order-transaction)
 * Update an order
  * [`taxJar.sync('updateOrder', params)`](http://developers.taxjar.com/api/?javascript#update-an-order-transaction) 
 * Create a refund transaction
  * [`taxJar.sync('updateOrder', params)`](http://developers.taxjar.com/api/?javascript#create-an-refund-transaction) 
 * Update a refund transaction
  * [`taxJar.sync('updateOrder', params)`](http://developers.taxjar.com/api/?javascript#update-an-refund-transaction) 
