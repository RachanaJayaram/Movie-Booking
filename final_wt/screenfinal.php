<html>
<head>
  <?php
    $data="";
    $list=Array();
    extract($_GET);
    $display=str_replace(" ","_",$moviename);
    $moviename=$display;
    $db=mysqli_connect('localhost:3306','root','','MOVIES');
    if(isset($db))
    {
      $checkstr="SELECT 1 from ".$moviename.";";
      $check=mysqli_query($db,$checkstr);
      if($check!==FALSE)
      {
        for($i=0;$i<14;$i++)
        {
          for($j=0;$j<=14;$j++)
          {
            $seatname=chr($i+65).$j;
            $checkseat="SELECT * FROM ".$moviename." WHERE seatname='".$seatname."';";
            $query=mysqli_query($db,$checkseat);
            if(mysqli_num_rows($query)>=1)
            {

            }
            else
            {
                $inserting="INSERT INTO ".$moviename." (seatname) VALUES('".$seatname."');";
                $res=mysqli_query($db,$inserting);
                if($i==0 || ($i==12 && $j%2==0) || ($i==3) ||($j==3 && $i%3==0) )
                {
                    $altering="UPDATE ".$moviename." SET status='OCCUPIED' WHERE seatname='".$seatname."';";
                    $query=mysqli_query($db,$altering);
                }
                else
                {
                  $altering="UPDATE ".$moviename." SET status='UNOCCUPIED' WHERE seatname='".$seatname."';";
                  $query=mysqli_query($db,$altering);
                }
            }
          }
        }
        $str2=mysqli_query($db,"SELECT * FROM ".$moviename.";");
        while($rows=mysqli_fetch_assoc($str2))
        {
          $data.=$rows["seatname"].":".$rows["status"].";";
        }
      }
      else
      {
        $str1="CREATE TABLE ".$moviename." (seatname varchar(255) NOT NULL ,status varchar(255) NOT NULL);";
        $res=mysqli_query($db,$str1);
        $str="ALTER TABLE ".$moviename." ALTER status SET DEFAULT 'UNOCCUPIED';";
        $res=mysqli_query($db,$str);
      }
    }
  ?>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Book Tickets</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="1000">

    <link rel="stylesheet" type="text/css" media="screen" href="screen.css" />
<script type="text/javascript">
<!--
var ids=new Array();
function add_buttons()
{
  var seats="<?php echo $data;?>";
  datalist= new Array();
  totaldata=seats.split(';');
  for(var i=0;i<totaldata.length;i++)
  {
    seatname=totaldata[i].split(':')[0];
    status=totaldata[i].split(':')[1];
    datalist[seatname]=status;
  }
    var  bill=  document.getElementById("cost_of_tickets");
    bill.innerText="Bill amount : "+String.fromCharCode(8377)+String(0);
    var dock=document.getElementById("bottom_dock");
    dock.style.display="none";
    document.getElementById('Movie_title').innerHTML="<h2>"+name+"</h2>";
    document.getElementById("Theatre_name").innerHTML="<b>"+localStorage.getItem('theatre_name')+"</b>";
    document.getElementById("Date_and_time").innerHTML=localStorage.getItem('dateandtime');



    var seat_matrix=new Array(10);
    for(var i=0;i<14;i++)
    {
        seat_matrix[i]=new Array(10);
    }
    var pre=document.getElementById("premium");
    var exe=document.getElementById("executive");
    for(var i=0;i<3;i++)
    {

        for(var j=0;j<14;j++)
        {

            seat_matrix[i][j]=document.createElement("button");
            seat_matrix[i][j].id=String.fromCharCode(65+i)+String(j+1);
            ids.push(String.fromCharCode(65+i)+String(j+1));
            pre.appendChild(seat_matrix[i][j]);


            var tempid=String.fromCharCode(65+i)+String(j+1);
            var temp=document.getElementById(tempid);
            seat_matrix[i][j].innerText=String(j+1);


            if(datalist[tempid]=="UNOCCUPIED")
            {
              temp.className="button";
            }
            else
            {
              temp.className="taken";
            }
            if(j==6)
            {
                pre.innerHTML=pre.innerHTML+"&emsp;"+"&emsp;"+"&emsp;"+"&emsp;";
            }

            pre.innerHTML=pre.innerHTML+"&emsp;"+"&emsp;";

        }
        pre.innerHTML=pre.innerHTML+"<br/>"+"<br/>";

    }



    for(var i=3;i<14;i++)
    {
     //   pre.innerHTML=pre.innerHTML+String.fromCharCode(65+i)+"&emsp;";
        for(var j=0;j<14;j++)
        {

          seat_matrix[i][j]=document.createElement("button");
          seat_matrix[i][j].id=String.fromCharCode(65+i)+String(j+1);
          ids.push(String.fromCharCode(65+i)+String(j+1));
          pre.appendChild(seat_matrix[i][j]);


          var tempid=String.fromCharCode(65+i)+String(j+1);
          var temp=document.getElementById(tempid);
          seat_matrix[i][j].innerText=String(j+1);

          if(datalist[tempid]=="UNOCCUPIED")
          {
            temp.className="button";
          }
          else
          {
            temp.className="taken";
          }
            //seat_matrix[i][j].style="border: 1px;border-color: dimgray;height:40px;width:40px;box-shadow: 0 6px 6px 0 rgba(0,0,0,0.2), 0 6px 6px 0 rgba(0,0,0,0.19);"
            exe.appendChild(seat_matrix[i][j]);
            if(j==6)
            {
                exe.innerHTML=exe.innerHTML+"&emsp;"+"&emsp;"+"&emsp;"+"&emsp;";
            }
            exe.innerHTML=exe.innerHTML+"&emsp;"+"&emsp;";

        }
        exe.innerHTML=exe.innerHTML+"<br/>"+"<br/>";

    }
    console.log(ids);

    function func2(event) {
        var  no=  document.getElementById("Number_of_tickets");
        var  bill=  document.getElementById("cost_of_tickets");

        console.log(no.innerText);
        console.log(bill.innerText);
       // no.style.backgroundColor="rgb(92, 43, 97)";
        var counter=parseInt(no.innerText.split(':')[1]);
        var sum=parseInt(bill.innerText.split(String.fromCharCode(8377))[1]);
        console.log("before"+counter);
        if(event.target.className=="button")
        {
             event.target.className="selected";
             counter++;
             if(event.currentTarget.parentNode.id=="premium")
                 sum+=250;
             else
                sum+=180;
        }
        else if (event.target.className=="selected")
        {
            event.target.className="button";
            counter--;
            if(event.currentTarget.parentNode.id=="premium")
                sum-=250;
            else
                sum-=180;
        }

    console.log("after"+counter);
    var dock=document.getElementById("bottom_dock");
    if(counter!=0)
    {
        dock.style.display="block";
    }
    else
    {
        dock.style.display="none";
    }
    no.innerText= "Number of tickets : "+String(counter);
    bill.innerText="Bill amount : "+String.fromCharCode(8377)+String(sum);
    localStorage.setItem("bill",String.fromCharCode(8377)+String(sum));
    console.log(no.style.innerText);
      };
    for(var i=0;i<196;i++)
    {
        var a=document.getElementById(ids[i]);
        a.addEventListener("click",func2);
    }
}

function next_page()
{
    var selected=new Array();
    for(var i=0;i<196;i++)
    {
        var a=document.getElementById(ids[i]);
        if(a.className=="selected")
        {
            selected.push(a.id);
        }
        localStorage.setItem('selected',selected);
        localStorage.setItem('movie',name);
    }
}

  -->
</script>
</head>
<body style="margin-block-start:0px;" onload="add_buttons()">

    <div id="titlebar" >
    <p>
        <span id="Movie_title">
                    <b>Movie_title</b>
        </span>
        <span id="Theatre_name">
                    Theatre_name
        </span>

        <div id="Number_of_tickets">
                    Number of tickets : 0
        </div>
        <div id="cost_of_tickets">
                    Bill amount : 0
        </div>
    </p>
    <p>
        <span id="Date_and_time">
            Date_and_time
        </span>
    </p>
    </div>
    <div>
        <br/> <br/> <br/> <br/>  <br/>        <br/> <br/><br/><br/>
    </div>
    <div id="seating_premium">

            Premium-Rs 250.0
            <hr>
            <br/>

        <div id="premium">

        </div>
    </div>
    <div id="seating_executive">
            Executive-Rs 180.0
            <hr>
            <br/>
        <div id="executive">

        </span>
    </div>
    <div style="position:absolute;left:80px;top:215px;line-height: 58px;">
        A<br/>
        B<br/>
        C<br/>

    </div>
    <div style="position:absolute;left:80px;top:450px;line-height: 58px;">
            D<br/>E<br/>F<br/>G<br/>H<br/>I<br/>J<br/>K<br/>L<br/>M<br/>N

    </div>
    <br/><br/><br/>
    <div id="screen">Screen
            <br/><br/><br/> <br/><br/><br/> df
    </div>

    <div id="bottom_dock">
        <a href="ticket.html">
            <button id="book" onclick="next_page()">Book Tickets</button>
        </a>
    </div>

</body>
</html>
