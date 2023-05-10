$ = function(id) {
  return document.getElementById(id);
}
// var signdets = ["signin:"];
// var logindets = ["login:"];
var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}

const myTimeout = setTimeout(Signup,10000);

function Signup(){
    document.getElementById('signup').style.display="block";
}
//
// function DetailsSignup(){
//   var firstname = document.getElementById('fname').value;
//   var lastname = document.getElementById('lname').value;
//   var emailID = document.getElementById('signemail').value;
//   var password = document.getElementById('signpass').value;
//   signdets.push(firstname,lastname,emailID,password);
//   console.log(signdets);
// }
//
// function DetailsLogin(){
//   var emailID = document.getElementById('loginemail').value;
//   var password = document.getElementById('loginpass').value;
//   logindets.push(emailID,password);
//   console.log(logindets);
// }
