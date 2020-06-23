setInterval(function(){ selectedTea(); }, 10000);

function selectedTea(){
    const selected = Math.floor((Math.random() * $('.caycilar li').length))
    $('.caycilar li').css("background-color", "transparent")
    $('.caycilar')
        .find('li')
        .eq(selected)
        .css("background-color", "green")
    const selectedUser = $('.caycilar')
        .find('li')
        .eq(selected)
        .children('span')
        .html()
    $(".selected").html(selectedUser)

}

const handleAsText = response => response.text();

const demo = document.getElementById("demo");

const displayResponse = responseText => demo.textContent = responseText;

function loadDoc() {
  const method = "POST";
  const headers = {
    "Content-type": "application/json",
    "Authorization": "Basic MzY4OGQzZDAtZmZkNC00NTVjLTgyMDctMzkxZWY5OThiYjdl",
  }

  const body = JSON.stringify({
    "app_id" : "e9918989-434e-45d7-bdf0-8ce3c8ca81dd",
    "contents": {"en": "Hello World!"} ,
    "included_segments" : ["All"],
  }) 

  return fetch("https://onesignal.com/api/v1/notification", {method, headers, body})
    .then(handleAsText)
    .then(displayResponse);
}
loadDoc()