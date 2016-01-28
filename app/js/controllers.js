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


});
