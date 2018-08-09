function navmenuz() {
    var x = document.getElementById("mymenuz");
        if (x.className === "menuz") {
            x.className += " wzbarjel";
        } else {
            x.className = "menuz"
        }
}
jellyVideoPhoto();
function jellyVideoPhoto(){
  var qw    = window.screen.availWidth;
  var vidti = $('video-title');
  if (qw <= 850 ){
    for (var i = 0; i < vidti.length; i++) {
      vidti[1].innerHTML = "";
    }
  }
}
