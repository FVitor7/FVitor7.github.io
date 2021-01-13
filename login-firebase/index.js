function verify_mail() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function()
  {
    // Email sent.
    window.alert("E-mail com link de confirmação de cadastro enviado com sucesso!");
  }).catch(function(error) {
    window.alert("Usuário já está com a conta ativada!");
    // An error happened.
  });
}
 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //window.location.href = 'home.html';
    document.getElementById("extra1").style.display = "none";
    document.getElementById("extra2").style.display = "block";

    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Seja bem-vindo : " + email_id;
      
    }

  } else {
    // No user is signed in.

    document.getElementById("extra1").style.display = "block";
    document.getElementById("extra2").style.display = "none";

  }
});

function login() {

  var userEmail = document.getElementById("email_field").value;
  //window.alert(userEmail);
  var userPass = document.getElementById("password_field").value;
  //window.alert(userPass);

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout() {
  firebase.auth().signOut();
}


function creat_user(){
  var userEmail2 = document.getElementById("email_2").value;
  //window.alert(userEmail);
  var userPass2 = document.getElementById("pass_2").value;
  //window.alert(userPass);
  firebase.auth().createUserWithEmailAndPassword(userEmail2, userPass2).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

  

  function next_login() {
    setTimeout(function(){ firebase.auth().signInWithEmailAndPassword(userEmail2, userPass2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    }); 
   }, 3000);
  };

  next_login();
  setTimeout(function(){ verify_mail(); }, 2000);

  
  
  
  
}