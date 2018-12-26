<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="login.css" />
    <script src=""></script>
</head>
<?php
$display=" ";
if($_SERVER["REQUEST_METHOD"] == "POST")
{
      $display=" ";
      extract($_POST);
      $db=mysqli_connect('localhost:3306','root','','USERS');
      if(isset($db))
      {
        $str="SELECT * FROM USERS WHERE EMAIL='".$email."' AND PASSWORD='".$password."';";
        //echo $str;
        $res=mysqli_query($db,$str);
        if($email!='' && $phonenumber!='' && $password!='' && $password1!='')
          {
            if(mysqli_num_rows($res)==1)
            {
              //echo mysqli_num_rows($res);
              $display="<br>This account already exists.";
            }
          else
          {
            $str1="INSERT INTO USERS(EMAIL,PHONENUMBER,PASSWORD) VALUES('".$email."','".$phonenumber."','".$password."');";
            echo $str1;
            $res1=mysqli_query($db,$str1);
            header('Location:loginfinal.php');
          }
        }
        else{
          $display="<br>Fill in the details<br>";
        }
      }
}
?>
<script type="text/javascript">
  <!--
  function CheckPasswordStrength()
  {
    var pass=document.getElementById("Password");
    var v1=document.getElementById("textarea");
    password=pass.value;
    if(password.length<=10 && password.length!=0)
    {
      v1.innerHTML="<br><br>The password is too weak!";
    }
    else
    {
      v1.innerHTML=" ";
    }
  }
  function CheckPasswordStrength1(password1)
  {
    var pass=document.getElementById("Password");
    var v1=document.getElementById("textarea");
    v1.style.color="white";
    var password=pass.value;
    if(password.length!=0 && password1!=password)
    {
      v1.innerHTML="<br><br>Passwords dont match!<br>";
    }
    else {
      v1.innerHTML=" ";
    }
  }
    -->
</script>
<body style="background-color:black" background="img.png">
        <div id="container">
        <form id="form"  method="post" style="top:20px" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
              <h1>Register</h1>
              <hr>
            <div class="label" >Email Id <br/>
            <input id="Email" name="email" type="text" placeholder="example123@email.com">

            </div> <br/>
            <div class="label" >Phone Number<br/>
                <input id="Phone Number" name="phonenumber" type="text" placeholder="Enter Your Phone Number Here">
            </div>
            <br/>
            <div class="label" >Password <br/>
            <input id="Password" type="password"
            onkeyup="CheckPasswordStrength()" name="password" placeholder="Enter Your Password Here" style="padding-left:1px;">
        </div>  <br/>
            <div class="label">Confirm Password <br/>
        <input id="Confirm Password" name="password1" onkeyup="CheckPasswordStrength1(this.value)" type="password" placeholder="Re-enter Your Password" style="padding-left:1px;">
        <span id="textarea"><?php echo $display?></span>
        </div> <br/>
            <hr>
            <br/>
            <input type="submit"  style="width:50%;"id="button1" value="CREATE A NEW ACCOUNT"></input>
            <br>
            <br>
            <br>
            <a href="loginfinal.php" style="width:100%;text-decoration:none;" id ="signin" class="button">Go To Login Page </a>
            <br/>
            <br/>


        </div>

        </form>
    </div>

</body>
</html>
