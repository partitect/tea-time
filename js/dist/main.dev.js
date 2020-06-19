"use strict";

setInterval(function () {
  selectedTea();
}, 10000);

function selectedTea() {
  var selected = Math.floor(Math.random() * $('.caycilar li').length);
  $('.caycilar li').css("background-color", "transparent");
  $('.caycilar').find('li').eq(selected).css("background-color", "green");
  var selectedUser = $('.caycilar').find('li').eq(selected).children('span').html();
  $(".selected").html(selectedUser);
}