
//My Accordion JS
var acc     = document.getElementsByClassName('accord-title');
      var panel   = document.getElementsByClassName('accord-panel');
      var i, j = 0;
      var accIndex = 0;
      for (i = 0; i < acc.length; i++){
          acc[0].addEventListener("click", function(){
            panel[1].style.maxHeight = "0px";
            panel[2].style.maxHeight = "0px";
            panel[0].style.maxHeight = "200px";
          });
          acc[1].addEventListener("click", function(){
            panel[0].style.maxHeight = "0px";
            panel[2].style.maxHeight = "0px";
            panel[1].style.maxHeight = "200px";
          });
          acc[2].addEventListener("click", function(){
            panel[0].style.maxHeight = "0px";
            panel[1].style.maxHeight = "0px";
            panel[2].style.maxHeight = "200px";
          });
      }
      
      // for (j = 0; j < panel.length; j++){
      //   panel[j].style.maxHeight = "0px";
      // }
      // accIndex++;

      // for (i = 0; i < acc.length; i++) {
      //   acc[i].addEventListener("click", function(){
      //     panel[accIndex].style.maxHeight = "0px";

      //     var accPanel = this.nextElementSibling;
      //     accPanel.style.maxHeight = "200px";

      //     // if (accPanel.style.maxHeight) {
      //     //   accPanel.style.maxHeight = null;
      //     // } else {
      //     //   accPanel.style.maxHeight = accPanel.scrollHeight + "px";
      //     // }
          
      //   });
      // }
      // panel[accIndex-1].style.maxHeight = "200px";

// Modal Show Video JS
var modal1  = $('#modal1');
var modal2  = $('#modal2');
var modal3  = $('#modal3');

// function showvideo(numb) {
//   var i;
//   for (i = 0; i < modal1.length; i++) {
//     console.log("i=" + i);
//   }
//   console.log(modal1.length);
// }

// console.log(modal1.length);