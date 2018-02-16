$(document).ready(function() {

   // hide all errors!
   $(".error").hide();

   $("button").click(function() {

      $(".error").hide();
      
      // validate first name
      var fname = $("input#firstname").val();
      if(fname == "") {
         $("label#firstname_error").show();
         $("input#firstname").focus();
         return false;
      }

      // validate last name
      var lname = $("input#lastname").val();
      if(lname == "") {
         $("label#lastname_error").show();
         $("input#lastname").focus();
         return false;
      }

      // validate email
      var email = $("input#email").val();
      if(email == "") {
         $("label#email_error").show();
         $("input#email").focus();
         return false;
      }

      // validate password
      var passwd = $("input#password").val();
      if(passwd == "") {
         $("label#password_error1").show();
         $("input#password").focus();
         return false;
      }

      if(checkPasswordLength(passwd) == false) {
         $("label#password_error2").show();
         $("input#password").focus();
         return false;
      }


      var dataString = "firstName=" + fname + "&lastName=" + lname + "&email=" + email + "&password=" +passwd;
      aler(dataString);
      return false;
   });
});

// password length check function
function checkPasswordLength(pwd) {
   check = false;
   if(pwd.length >= 8) {
      check = true;
   }
   return check;
}