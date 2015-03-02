'use strict';

angular.module('starter.controllers', [])

.controller('DashCtrl', function(){})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('HomeCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
    $scope.startApp=function(){
      $state.go('tab.dash');
    };
    $scope.next=function(){
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous=function(){
      $ionicSlideBoxDelegate.previous();
    };
    $scope.slideChanged=function(index){
      $scope.slideIndex=index;
    };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
