//  start jq login
 $(document).ready(function() {

   var text=$("#username");
   var pass=$(".password");

   text.on('keyup', function() {


     if(text.val() === "admin" && pass.val() ==="admin") {
       console.log('text = admin')
       $("button").attr('hidden', false);
     }
   });


   pass.on('keyup', function() {

     if(text.val() === "admin" && pass.val() ==="admin") {
       console.log('text = admin')
       $("button").attr('hidden', false);
     }
   });

  });
  // end jq login
 
  //  start drowing jq
  window.onload = function() {
    var  color;
    
    colorArray = ['red', 'green', 'blue', 'orangered', 'yellow', 'rebeccapurple', 'tomato', 'orchid', 'goldenrod', 'mediumpurple', 'firebrick', 'green', 'fuchsia', 'gray', 'white', 'brown', 'peru', 'aqua', 'springgreen', 'slategrey', 'aquamarine', 'sienna', 'darkorange', 'darkcyan', 'black']
    
    colorArray.forEach(function(element,index) {
     $('#c'+(index+1)).click ( function(){   "use strict";
        color = element;
        console.log(color)
      
      })
        
    });
    for(x=0;x<Layer_1.getElementsByTagName('path').length;x++)
    {Layer_1.getElementsByTagName('path')[x].onclick=function()
    { this.setAttribute('fill',color); } }





  
    }
  // end drowing jq