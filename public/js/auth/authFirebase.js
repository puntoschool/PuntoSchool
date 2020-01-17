//Crea una cuenta basada en contraseña

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
}); email - password.html



//Usuario acceda con una dirección de correo electrónico y una contraseña
  
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
}); email - password.html



// Salir de la cuenta de usuario
  
firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });


////////////////////////////////////////////////////////////////////////////////////77

//Obtén el usuario con sesión activa

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});



/* Obtén el perfil de un usuario
Para obtener la información del perfil de un usuario, puedes usar las propiedades de una instancia de User. Por ejemplo:
 */
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}


//Actualiza el perfil de un usuario
//Puedes actualizar información básica del perfil de usuario (el nombre visible y la URL de la foto de perfil del usuario) con el método updateProfile. Por ejemplo:

var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});



//Configura la dirección de correo electrónico de un usuario
//Para configurar la dirección de correo electrónico de un usuario, puedes usar el método updateEmail. Por ejemplo:

var user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});



//Envía un mensaje de verificación al usuario
//Para enviar un mensaje de verificación de dirección a un usuario, puedes usar el método sendEmailVerification. Por ejemplo:

var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});



//Configura la contraseña de un usuario
//Para configurar la contraseña de un usuario, puedes usar el método updatePassword. Por ejemplo:

var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});



//Envía un correo electrónico de restablecimiento de la contraseña
//Para enviar un correo electrónico de restablecimiento de la contraseña a un usuario, puedes usar el método sendPasswordResetEmail. Por ejemplo:

var auth = firebase.auth();
var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});



//Borra un usuario
//Para borrar una cuenta de usuario, puedes usar el método delete. Por ejemplo:

var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});


//Vuelve a autenticar un usuario
//Por motivos de seguridad, algunas acciones, como borrar una cuenta, configurar una dirección de correo electrónico principal y cambiar una contraseña, no pueden realizarse ///si el usuario no accedió a su cuenta recientemente. Si transcurrió demasiado tiempo desde que el usuario accedió a su cuenta, cualquier intento de realizar estas acciones ////fallará. Cuando esto suceda, debes volver a autenticar al usuario. Para ello, obtén credenciales de acceso nuevas del usuario y pásalas a reauthenticateWithCredential. Por ///ejemplo:

var user = firebase.auth().currentUser;
var credential;

// Prompt the user to re-provide their sign-in credentials

user.reauthenticateWithCredential(credential).then(function() {
  // User re-authenticated.
}).catch(function(error) {
  // An error happened.
});

//Importa cuentas de usuario
//Para importar cuentas de usuario desde un archivo al proyecto de Firebase, puedes usar el comando auth:import de Firebase CLI. Por ejemplo:

firebase auth: import users.json --hash - algo=scrypt--rounds = 8 --mem - cost=14


/////////////////////////////////////////////////////////////////////////////////////////////////7777

// Autentica mediante el Acceso con Google 

//Crea una instancia del objeto del proveedor de Google:
var provider = new firebase.auth.GoogleAuthProvider();

//Autentica con Firebase a través del objeto del proveedor de Google. Puedes pedirle a los usuarios que accedan con sus cuentas de Google a través de una ventana emergente o ///redireccionándolos a la página de acceso. El método de redireccionamiento se prefiere en dispositivos móviles.
//Para ofrecer acceso con una ventana emergente, invoca signInWithPopup:
//firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});

//Para acceder mediante el redireccionamiento a la página de acceso, invoca signInWithRedirect:
//firebase.auth().signInWithRedirect(provider);

//También puedes obtener el token de OAuth del proveedor de Google mediante la invocación de getRedirectResult cuando la página carga:
//firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});