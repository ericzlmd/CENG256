$(document).ready(function() {
   $(".error").hide();
   $(".button").click(function() {
      $(".error").hide();

      // validate name form
      var name = $("input#name").val();
      if(name == "") {
         $("label#name_error").show();
         $("input#name").focus();
         return false;
      }

      // validate email
      var email = $("input#email").val();
      if(email == "") {
         $("label#email_error").show();
         $("input#email").focus();
         return false;
      }

      // validate phone
      var phone = $("input#phone").val();
      if(phone == "") {
         $("label#phone_error").show();
         $("label#phone").focus();
         return false;
      }
   });
});