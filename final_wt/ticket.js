function on_load()
{
    movie_name=document.getElementById("moviename");
    movie_name.innerHTML+=localStorage.getItem('movie');
    //movie_name.innerHTML+=localStorage.getItem('movie');
    var theatre=document.getElementById("theatre");
    theatre.innerHTML+=localStorage.getItem('theatre_name');
    var date=document.getElementById("date");
    date.innerHTML+=localStorage.getItem('dateandtime');
    seats=document.getElementById("seats");
    seats.innerHTML+=localStorage.getItem('selected');
    var bill=document.getElementById("bill");
    bill.innerHTML+=localStorage.getItem('bill');
    var userid=document.getElementById('blackie');
    userid.style.color="White";
    userid.innerHTML+=localStorage.getItem('Usermail');
    userid.style.textAlign="center";
}
function next_page()
{
    var movie1=movie_name.innerHTML;

    var seats1=seats.innerHTML;
    document.location.href="editdata.php?moviename="+movie1+"&seats="+seats1;
    localStorage.setItem('userid',localStorage.getItem('Usermail'));
}
