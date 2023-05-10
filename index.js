$ = function(id) {
  return document.getElementById(id);
}
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
