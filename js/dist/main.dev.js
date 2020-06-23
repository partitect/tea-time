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

var handleAsText = function handleAsText(response) {
  return response.text();
};

var demo = document.getElementById("demo");

var displayResponse = function displayResponse(responseText) {
  return demo.textContent = responseText;
};

function loadDoc() {
  var method = "POST";
  var headers = {
    "Content-type": "application/json",
    "Authorization": "Basic MzY4OGQzZDAtZmZkNC00NTVjLTgyMDctMzkxZWY5OThiYjdl"
  };
  var body = JSON.stringify({
    "app_id": "e9918989-434e-45d7-bdf0-8ce3c8ca81dd",
    "contents": {
      "en": "Hello World!"
    },
    "included_segments": ["All"]
  });
  return fetch("https://onesignal.com/api/v1/notification", {
    method: method,
    headers: headers,
    body: body
  }).then(handleAsText).then(displayResponse);
}

loadDoc();