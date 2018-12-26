var currentDay;
var theatre_name;
var dateandtime;

var today_date;
var tom_date;
var dayafter_date;


function play_trailer()
{ 
	currentDay="today";
	alert("Your location is approximately : "+localStorage.getItem("locality")+"\nShowing theatres in : "+localStorage.getItem("city"));
	
	
	var tod=document.getElementById("today");
	tod.style.backgroundColor="rgb(62, 14, 66)";
	set_date();
	set_buttons();
	switch(currentDay)
	{
		case 'today': dateandtime=today_date;break;
		case 'tomorrow':dateandtime=tom_date;break;
		case 'dayafter':dateandtime=dayafter_date;break;
	}


    
switch(name)
	{
		case 'Venom': document.getElementById('title').innerHTML=name;
					var video = document.getElementById('vid');
					video.src="https://www.youtube.com/embed/u9Mv98Gr5pY";
					break;
					
		case 'Johnny English Strikes Again': document.getElementById('title').innerHTML=name;
											var video = document.getElementById('vid');
                                            video.src="https://www.youtube.com/embed/-Qv6p6pTz5I";
											break;
									
		case 'The Incredibles 2':  document.getElementById('title').innerHTML=name;
									var video = document.getElementById('vid');
									video.src="https://www.youtube.com/embed/i5qOzqD9Rms";
									break;	
									
		case 'Halloween': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/ek1ePFp-nBI";
						break;
						
		case 'First Man': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/PSoRx87OO6k";
						break;
						
		case 'Christopher Robin': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/0URpDxIjZrQ";
						break;	

		case 'Andhadhun': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/2iVYI99VGaw&t=2s";
						break;	

		case 'Badhaai Ho': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/unAljCZMQYw?autoplay=1";
						break;	

		case 'Thugs Of Hindostan': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/zI-Pux4uaqM";
						break;	

		case 'Bazaar': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/Pb7iJnIWzNk";
						break;	

		case 'Sarkari hiriya Prathamika Shale Kasaragodu': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/oA-U1rR3pNc";
						break;	

		case 'The Villain': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/mN4zA3KGFjo";
						break;	

		case 'Ambi Ning Vayssaytho': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/tuam-FqCkhI";
						break;	

		case 'Gvana Yajna': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/YJm6M0kQxIE";
						break;	

		case 'Titanic': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/tXbGHqiAmME";
						break;	

		case 'Avatar': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/5PSNL1qE6VY";
						break;	

		case 'Hunter Killer': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/mnP_z3qXDCQ";
						
						break;	

		case 'Zindagi Na Milegi Dobara': document.getElementById('title').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/FJrpcDgC3zU";
						break;	

						
								
    }
}

function set_date()
{

	var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"];
	var today=new Date();
	var tomm=new Date(today.getTime()+24*60*60*1000);
	var dayafter=new Date(tomm.getTime()+24*60*60*1000);
	var tod=document.getElementById("today");
	tod.innerHTML="Today: "+days[today.getDay()]+", "+String(today.getDate())+" "+String(months[today.getMonth()-1]);
	today_date=tod.innerHTML;
	var tom=document.getElementById("tomorrow");
	tom.innerHTML="Tom: "+days[tomm.getDay()]+", "+String(tomm.getDate())+" "+String(months[tomm.getMonth()-1]);
	tom_date=tom.innerHTML;
	var dayaft=document.getElementById("dayafter");
	dayaft.innerHTML=days[dayafter.getDay()]+", "+String(dayafter.getDate())+" "+String(months[dayafter.getMonth()-1]);
	dayafter_date=dayaft.innerHTML;
}

function this_day(event)
{
	currentDay=event.target.id;
	switch(currentDay)
	{
		case 'today': dateandtime=today_date;break;
		case 'tomorrow':dateandtime=tom_date;break;
		case 'dayafter':dateandtime=dayafter_date;break;
	}

	var tod=document.getElementById("today");
	var tom=document.getElementById("tomorrow");
	var dayaft=document.getElementById("dayafter");

	var p1=document.getElementById("1");
	var h1=document.getElementById("h1");
	var p3=document.getElementById("3");
	var h3=document.getElementById("h3");
	var b8=document.getElementById("b8");
	var b4=document.getElementById("b4");
	var b5=document.getElementById("b5");
	var b6=document.getElementById("b6");
	var b7=document.getElementById("b7");
	var b12=document.getElementById("b12");
	var b15=document.getElementById("b15");
	set_buttons();


	if(event.target.id=="today")
	{
		tom.style.backgroundColor="rgb(27, 27, 27)";
		dayaft.style.backgroundColor="rgb(27, 27, 27)";
		tod.style.backgroundColor="rgb(62, 14, 66)";
		p1.style.display="inline";
		h1.style.display="block";
		
	
		p3.style.display="inline";
		h3.style.display="block";

		b8.style.display="inline";		
		b5.style.display="inline";
		b4.style.display="inline";
		b6.style.display="inline";
		b7.style.display="inline";
		b12.style.display="inline";
		b15.style.display="inline";



	}

	if(event.target.id=="tomorrow")
	{
		tod.style.backgroundColor="rgb(27, 27, 27)";
		dayaft.style.backgroundColor="rgb(27, 27, 27)";
		tom.style.backgroundColor="rgb(62, 14, 66)";

		p1.style.display="inline";
		h1.style.display="block";
		
		p3.style.display="inline";
		h3.style.display="block";
		b6.style.display="inline";
		b7.style.display="inline";
		b15.style.display="inline";

					
		b8.style.display="none";	
		b5.style.display="none";
		b7.style.display="inline";
		b12.style.display="none";



	}


	if(event.target.id=="dayafter")
	{
		tod.style.backgroundColor="rgb(27, 27, 27)";
		tom.style.backgroundColor="rgb(27, 27, 27)";
		dayaft.style.backgroundColor="rgb(62, 14, 66)";

		p1.style.display="none";
		h1.style.display="none";
		
	
		p3.style.display="none";
		h3.style.display="none";

		b8.style.display="none";	
			
		b5.style.display="none";
		
		b4.style.display="none";
		b6.style.display="none";
		b7.style.display="none";
		b12.style.display="none";
		b15.style.display="none";



	}
}
function set_buttons()
{
	var tod=document.getElementById("today");
	var buts=['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10','b11', 'b12', 'b13', 'b14', 'b15','b16'];
	for(var i =0;i<17;i++)
	{
		var but=document.getElementById(buts[i]);
		if(currentDay=="today")
		{	
				
				var time=but.innerHTML;
				var movietime=0;
				var currenttime=0;
				if(time.substring(8,10)=="PM")
				{	movietime+=12*60;
				}
				var hour=time.substring(3,5);
				if(hour=="12")
					hour="0";
				movietime+=parseInt(hour)*60+parseInt(time.substring(6,8));

				var now=new Date();
				currenttime=now.getHours()*60+now.getMinutes();
				if(currenttime>=movietime)
					but.className="overbut";
		}
		else
			but.className="but";



	}


}


function func(event)
{
	//alert(event.currentTarget.className+" "+event.currentTarget.id);
	
	if(event.currentTarget.className=="but")
	{
		var but=event.currentTarget;
		theatre_name=but.parentNode.innerText.substring(0,but.parentNode.innerText.indexOf('.'));
		dateandtime+=" at "+but.innerText;
		localStorage.setItem("theatre_name",theatre_name);
		localStorage.setItem("dateandtime",dateandtime);

		document.location.href="screenfinal.php?moviename="+name;

	}

}