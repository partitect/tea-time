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

window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
  OneSignal.init({
    appId: "e9918989-434e-45d7-bdf0-8ce3c8ca81dd",
  });
});