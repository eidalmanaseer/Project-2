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
 

  window.onload = function() {
    var  color;
    
    colorArray = ['red', 'green', 'blue', 'orangered', 'yellow', 'rebeccapurple', 'tomato', 'orchid', 'goldenrod', 'mediumpurple', 'firebrick', 'green', 'fuchsia', 'gray', 'white', 'brown', 'peru', 'aqua', 'springgreen', 'slategrey', 'aquamarine', 'sienna', 'darkorange', 'darkcyan', 'violet']
    
    colorArray.forEach(function(element,index) {
     $('#c'+(index+1)).click ( function(){   "use strict";
        color = element;
        console.log(color)
      
      })
        
    });
    }