	/*<script type="text/javascript">
	<!--
	var name;
	function imageClick(event) {
		name = event.target.id;
	}
	function position()
	{
		if(navigator.geolocation)
		{
			navigator.geolocation.getCurrentPosition(ShowPosition);
		}
	}
	function ShowPosition(location)
	{
		var x=location.coords.latitude;
		var y=location.coords.longitude;
		alert("Latitude:"+x+"\nLongitude:"+y+"\nLocation:Bangalore");
	}
	-->
	</script>*/
function func(){
	
	switch(name)
	{
		case 'Venom': document.getElementById('move').innerHTML=name;
					var video = document.getElementById('vid');
					video.src="https://www.youtube.com/embed/u9Mv98Gr5pY";
					video.play;
					document.getElementById('genre1').innerHTML= "THRILLER";
					document.getElementById('genre2').innerHTML= "SCI-FI";
					document.getElementById('rat1').innerHTML = "IMDb <br> 7/10";
					document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>29%";
					break;
					
		case 'Johnny English Strikes Again': document.getElementById('move').innerHTML=name;
											var video = document.getElementById('vid');
											video.src="https://www.youtube.com/embed/-Qv6p6pTz5I";
											video.play;
											document.getElementById('genre1').innerHTML= "ACTION";
											document.getElementById('genre2').innerHTML= "ADVENTURE";
											document.getElementById('rat1').innerHTML = "IMDb <br> 6.6/10";
											document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>33%";
											break;
									
		case 'The Incredibles 2':  document.getElementById('move').innerHTML=name;
									var video = document.getElementById('vid');
									video.src="https://www.youtube.com/embed/i5qOzqD9Rms";
									video.play;
									document.getElementById('genre1').innerHTML= "ACTION"
									document.getElementById('genre2').innerHTML= "SCI-FI";
									document.getElementById('rat1').innerHTML = "IMDb <br> 8/10";
									document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>94%";
									break;	
									
		case 'Halloween': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/ek1ePFp-nBI";
						video.play;
						document.getElementById('genre1').innerHTML= "MYSTERY";
						document.getElementById('genre2').innerHTML= "SLASHER";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7.2/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>79%";
						break;
						
		case 'First Man': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/PSoRx87OO6k";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "SCI-FI";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7.7/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>88%";
						break;
						
		case 'Christopher Robin': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/0URpDxIjZrQ";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "FANTASY";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7.6/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>71%";
						break;	

		case 'Andhadhun': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/2iVYI99VGaw&t=2s";
						video.play;
						document.getElementById('genre1').innerHTML= "THRILLER";
						document.getElementById('genre2').innerHTML= "MYSTERY";
						document.getElementById('rat1').innerHTML = "IMDb <br> 9.1/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>100%";
						break;	

		case 'Badhaai Ho': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/unAljCZMQYw";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "ROMANCE";
						document.getElementById('rat1').innerHTML = "IMDb <br> 8.3/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>86%";
						break;	

		case 'Thugs Of Hindostan': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/zI-Pux4uaqM";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "ACTION";
						document.getElementById('rat1').innerHTML = "IMDb <br> 5.2/10";
						document.getElementById('rat2').innerHTML = "Crictics Rating <br> 3/5";
						break;	

		case 'Bazaar': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/Pb7iJnIWzNk";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "THRILLER";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7.6/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>40%";
						break;	

		case 'Sarkari hiriya Prathamika Shale Kasaragodu': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/oA-U1rR3pNc";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "COMEDY";
						document.getElementById('rat1').innerHTML = "Crictics Rating <br> 3.5/15";
						document.getElementById('rat2').innerHTML = "Users Rating <br> 4.6/5";
						break;	

		case 'The Villain': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/mN4zA3KGFjo";
						video.play;
						document.getElementById('genre1').innerHTML= "MYSTERY";
						document.getElementById('genre2').innerHTML= "THRILLER";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7.5/10"
						document.getElementById('rat2').innerHTML = "Crictics Rating <br> 2.5/5";
						break;	

		case 'Ambi Ning Vayssaytho': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/tuam-FqCkhI";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "COMEDY";
						document.getElementById('rat1').innerHTML = "IMDb <br>8.3/10";
						document.getElementById('rat2').innerHTML = "Crictics Rating <br> 3.5/5";
						break;	

		case 'Gvana Yajna': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/YJm6M0kQxIE";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "ROMANCE";
						document.getElementById('rat1').innerHTML = "IMDb <br>4/10";
						document.getElementById('rat2').innerHTML = "Crictics Rating <br> 2.5/5";
						break;	

		case 'Titanic': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/tXbGHqiAmME";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "DISASTER FILM";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7.8/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>89%";
						break;	

		case 'Avatar': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/5PSNL1qE6VY";
						video.play;
						document.getElementById('genre1').innerHTML= "SCI-FI";
						document.getElementById('genre2').innerHTML= "FANTASY";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7.8/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>82%";
						break;	

		case 'Hunter Killer': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/mnP_z3qXDCQ";
						video.play;
						document.getElementById('genre1').innerHTML= "THRILLER";
						document.getElementById('genre2').innerHTML= "ACTION";
						document.getElementById('rat1').innerHTML = "IMDb <br> 7/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>36%";
						break;	

		case 'Zindagi Na Milegi Dobara': document.getElementById('move').innerHTML=name;
						var video = document.getElementById('vid');
						video.src="https://www.youtube.com/embed/FJrpcDgC3zU";
						video.play;
						document.getElementById('genre1').innerHTML= "DRAMA";
						document.getElementById('genre2').innerHTML= "ROMANCE";
						document.getElementById('rat1').innerHTML = "IMDb <br> 8.1/10";
						document.getElementById('rat2').innerHTML = "Rotten Tomatoes<br>100%";
						break;	

						
								
	}


}
