angular.module('sc').controller("StoreController", function($scope, itemFactory, cartPusher, $location){
 $scope.storeItems = itemFactory.storeItems;
 $scope.cart = cartPusher.cart;
 $scope.itemCount = cartPusher.cartCount;
 $scope.addCart = function (item, qty){
   cartPusher.updateCart(item, qty);
 }
 $scope.changeView = function(view){
   $location.path(view);
 }
});

angular.module('sc').controller("CartController", function($scope, cartPusher){
  $scope.cart = cartPusher.cart;
  $scope.getTotal = function(){
    var total = 0;
    for(var i = 0; i < $scope.cart.length; i++){
        var product = $scope.cart[i];
        total += (product.price * product.qty / 100);
    }
    return total;
  }
});
