//constants
const maxCommodityPrice = 9.99;
const minCommodityPrice = 0.5;
const maxCommodityPriceChange = 0.5;
var nameOfCommodities = ['Toaster', 'Lamp', 'Clock', 'BlueRay Player', 'Apples', 'Oranges', 'Bananas', 'Grapes', 'Comic books', 'Fancy Stuffed Animals', 'Jewelry', 'Wine'];
//angular app
var app = angular.module('myApp', []);

//game controller
app.controller('CommodityController', function() {
  var vm = this;
  vm.commodities = [];


  vm.fillObjectArray = function() {
    for (let name of nameOfCommodities) {
      vm.commodities.push(new Commodity(name));

      name++;
    }
  }; //end fillObjectArray


  vm.wallet = 100;
}); //end controller

//commodity class
class Commodity {
  //constructor
  constructor(name) {
    this.name = name;
    this.price = this.setPrice();
    this.inventory = 0;
    this.avgPricePaid = 0;
    this.purchasedArr = [];
  }

  //set price method
  setPrice() {
    return ((Math.random() * (maxCommodityPrice - minCommodityPrice)) + minCommodityPrice).toFixed(2);
  } //end set price method

  //change price method
  changePrice() {
    var priceChangeAmount = (Math.random() - maxCommodityPriceChange).toFixed(2);
    //check if adding number would bring item price below 0.5
    //or if adding number would bring item price above 9.99
    if (this.price + priceChangeAmount < 0.5) {
      //below minimum
      this.price -= priceChangeAmount;
    } else if (this.price + priceChangeAmount > 9.99) {
      //above maximum
      this.price -= priceChangeAmount;
    } else {
      //in between
      this.price += priceChangeAmount;
    } //end if statement
  } //end change price method


} //end commodity class
