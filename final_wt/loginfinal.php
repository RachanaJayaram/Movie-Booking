<!DOCTYPE html>
<html>
<head>
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
          if($email!='' && $password!='')
          {
            $res=mysqli_query($db,$str);
            if(mysqli_num_rows($res)>=1)
            {
              header('Location:location.html');
            }
            else
             {
              $display="<br>&nbsp;&nbsp;Invalid email or password!<br></br>";
            }
          }
          else {
            $display="<br>&nbsp;&nbsp;Fill in the details.<br>  ";
        }
      }
  }
  ?>
  <script type="text/javascript">
  <!--
  function func()
  {
    var email=document.getElementById('Email');
    var element=email.value;
    localStorage.setItem('Usermail',element);
  }
  -->
  </script>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Login Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="login.css" />
    <script src=""></script>
</head>
<body style="background-color:black">
        <div id="container">


        <form id="form" style="top:80px;left:400px;" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
              <h1>Login</h1>
              <hr>

            <div class="label">Email Id <br/>
            <input id="Email" type="text" placeholder="example123@email.com" name="email">
            </div>
            <br>
            <div class="label">Password <br/>
            <input id="Password"  type="password" placeholder="Enter Your Password Here" name="password" style="padding-left:1px;">
        </div>
            <br/>
            <hr>
            <span id="password" style="text-align:center;"><?php echo $display?></span>
            <br>
            <input onmouseover="func()"type="submit" style="width:240px;margin-left:25px;" id="button1" value="SIGN-IN"></input>
            <br/>
            <br/>
            <br/> <a href="registerfinal.php" style="width:240px;margin-left:25px;" id ="signin" class="button">New User? Register Here</a>
            <br/>
            <br/>
            <br/>
        </div>

        </form>
    </div>

</body>
</html>
