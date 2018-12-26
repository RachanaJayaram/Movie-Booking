var name;
function imageClick(event) {
	name = event.target.id;

}
function funct()
{
	var useremail=document.getElementById("useremail");
	useremail.innerHTML=localStorage.getItem('Usermail');
}
