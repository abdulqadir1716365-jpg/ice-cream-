document.getElementById("loginform").addEventListener("submit", function(e){

  e.preventDefault();

  let email = document.getElementsByClassName("email")[0].value;

  let password = document.getElementsByClassName("password")[0].value;

  

  if(email === "abdjkkk@gmail.com" && password === "123456"){

    window.location.href = "home.html";

  }else{

    document.getElementById("error").innerHTML = "Wrong email and password";

  }

});

