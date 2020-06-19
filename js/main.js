setInterval(function(){ selectedTea(); }, 3000);

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
    notifyMe(selectedUser)
}

// request permission on page load
document.addEventListener('DOMContentLoaded', function() {
    if (!Notification) {
     alert('Desktop notifications not available in your browser. Try Chromium.');
     return;
    }
   
    if (Notification.permission !== 'granted')
     Notification.requestPermission();
   });
   
   
   function notifyMe(user) {
    if (Notification.permission !== 'granted')
     Notification.requestPermission();
    else {
     var notification = new Notification('Şanslı Kişimiz', {
      icon: 'https://www.karatekin.edu.tr/img/logo_new.png',
      body: user,
     });
     notification.onclick = function() {
      //window.open('http://stackoverflow.com/a/13328397/1269037');
     };
    }
   }