<script
      src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"  
>
   

</script>

<header>
    <div class="inner">
        <nav>
            <img src="/" width="70" height="70" alt=""> 
            <span class='vl'> </span> 
            <img src="/" width="70" height="70" alt="">
            <a href="." class="title"><strong>CS CLUB</strong></a>
            <input type="checkbox" id="nav" /><label for="nav"></label>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">CP</a></li>
                <li><a href="/">EDITH</a></li>
                <li><a href="/">Networking</a></li>
                <li><a href="/">People</a></li>
                <li><a href="/">Timeline</a></li>       
            </ul>
        </nav>
    </div>
</header>


<div class="heading">
<h1>Educating Information Technology and Hardware</h1>
</div>


<style>
  
.vl {
  border-left: 2px solid green;
  margin-right: 3px;
  height: 1px;
  position: static;
  margin-top: 5px;
}
.title {
    text-decoration: none;
    color: linear-gradient(180deg, #34D399 0%, #43E97B 100%);
    font-weight: 800;
    font-size: 40px;
    line-height: 40px;
    position: absolute;
    margin-top:17px ;
}

nav > ul {
    float: right;
}
nav > ul > li {
    text-align: center;
    line-height: 60px;
    margin-left: 70px;
    padding-top:8px;
}
nav > ul li ul li {
    width: 100%;
    text-align: left;
}
nav ul li:hover {
    cursor: pointer;
    position: relative;
}
/* nav ul li:hover > ul {
    display: block;
} */
nav ul li:hover > a {
    color: black;
}
nav > ul > li > a {
    cursor: pointer;
    display: block;
    outline: none;
    width: 100%;
    text-decoration: none;
}
nav > ul > li {
    float: left;
}
nav a {
    color:linear-gradient(180deg, #34D399 0%, #43E97B 100%);
}
nav > ul li ul {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: 2000;
}
nav > ul li ul li > a {
    text-decoration: none;
}
[type="checkbox"],
label {
    display: none;
}
@media screen and (max-width: 768px) {
    nav ul {
        display: none;
    }
    label {
        display: block;
        background: black;
        width: 40px;
        height: 40px;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 0px;
    }
    label:after {
        content: '';
        display: block;
        width: 30px;
        height: 5px;
        background: #777;
        margin: 7px 5px;
        box-shadow: 0px 10px 0px #777, 0px 20px 0px #777
    }
    [type="checkbox"]:checked ~ ul {
        display: block;
        z-index: 9999;
        position: absolute;
        right: 20px;
        left: 20px;
    }
    nav a {
        color: linear-gradient(180deg, #34D399 0%, #43E97B 100%);;
    }
    nav ul li {
        display: block;
        float: none;
        width: 100%;
        text-align: left;
        background: black;
        text-indent: 20px;
    }
    nav > ul > li {
        margin-left: 0px;
    }
    nav > ul li ul li {
        display: block;
        float: none;
    }
    nav > ul li ul {
        display: block;
        position: relative;
        width: 100%;
        z-index: 9999;
        float: none;
    }
    h1 {
        font-size: 26px;
    }
}

  

.heading{
    background: black;
    text-align: center;
    font-size: 1.7rem;
    padding: 100px 250px;
    margin: 0;
}

/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" /> */



</style>