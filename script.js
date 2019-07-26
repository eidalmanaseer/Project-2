// start jq login
$(document).ready(function() {

  var text=$("#username");
  var pass=$(".abd2");

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


