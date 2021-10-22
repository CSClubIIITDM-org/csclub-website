<script
      src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"  
>
   

</script>

<header>
    <div>
        <nav>
            <img src="/" width="70" height="70" alt=""> 
            <span class='vl'> </span> 
            <img src="/" width="70" height="70" alt="">
            <a href="." class="title"><strong>CS CLUB</strong></a>
            <input type="checkbox" id="nav" /><label for="nav"></label>
            <ul>
                <li><a href=".">Home</a></li>
                <li><a href="gallery">Gallery</a></li>
                <li><a href="cp">CP</a></li>
                <li><a href="prit">PRIT</a></li>
                <li><a href="edith">EDITH</a></li>
                <li><a href="networking">Networking</a></li>
                <li><a href="people">People</a></li>
                <li><a href="timeline">Timeline</a></li>       
            </ul>
        </nav>
    </div>
</header>


<div class="heading">
<h1>Educating Information Technology and Hardware</h1>
</div>

<div id="row">
    <div class="column_1" >
      <h2>Our Aim</h2>
      <p>Education in Information Technology and Hardware commonly known as EDiTH is a branch of the CS Club that strives to create opportunities for students to explore a variety of domains in Computer Science - bridging the gap between software and hardware. We help students explore different areas of interest by providing them a social environment where students with various technology experiences can come together and share their knowledge and expertise.</p>
      <p>The hands-on experience that we provide increases self-reliance and interest. Keeping sessions on a myriad of topics ranging from Logic to Cybersecurity keeps them up to date with the ever evolving technology. Conducting guest lectures and workshops aid students to get exposure to new facets of the subject beyond the conventional classrooms.
      </p>
    </div>
    <div class="column_2">
     <!-- <img src=" "> -->
    </div>
  </div>

  <div class="events">
    <h1>Our Events</h1>
    <div class="container">
      <div class="box box2">Basics of HTML/CSS
          <div class="button-container">
              <div class="add-button">+</div>
          </div>
      </div>
      <div class="box box2">Github Session</div>
      <div class="box box2">Session on Javascript</div>
      <div class="box">Session on Linux,WSL,Security Challenges</div>
    </div>
  </div>
  
  <!-- <h1>Hi</h1> -->

  <div id="row2">
      <div class="column-1">
              <div>
                  <div class="footer-widget-heading">
                      <h3 class="loc">Location</h3>
                  </div>
                  <div>
                      <div class="map"></div>
                  </div>
              </div>
      </div>
      <div class="column-2">
                  <div class="footer-widget-heading ">
                      <h3 class="contact">Contact us</h3>
                  </div>
                  <div class="footer-widget-heading">
                      <h4 style="color: white" class="footer-cs">CS Club</h4>
                      <div class="address">
                      <p style="color: white">IIITDM Kancheepuram</p>
                        <p>Chennai: 600127.</p>
                    </div>
                      <p class="mail-id"style="color: whitesmoke">
                          Email:
                          <a href="mailto:csclub@iiitdm.ac.in"> csclub@iiitdm.ac.in </a>
                      </p>
                  </div>
      </div>
  </div>

<div class="copyright-area">
                <div class="copyright-text">
                    <p>
                        Copyright &copy; 2020 | All Rights Reserved | Done by
                        <a href="people">Web Team</a>
                    </p>
                </div>
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


nav ul li:hover > a {
    color: white;
}

nav > ul > li {
    float: left;
}

nav a {
    color:linear-gradient(180deg, #34D399 0%, #43E97B 100%);
}

[type="checkbox"],
label {
    display: none;
}
@media screen and (max-width: 1000px) {
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
    font-weight: bold000;
}

#row:after {
  content: "";
  display: table;
  clear: both;
  margin-bottom: 100px;
}

.column_1 {
  float: left;
  width: 55%;
  padding: 10px;
  margin-top: 2rem;
}

.column_1 h2{
    font-size: 50px;
}

.column_1 p{
    padding: 15px 0;
    font-size: 20px;
}

.column_2 {
  float: left;
  width: 45%;
  padding: 10px;
  margin-top: 2rem;  
}

.container{
  margin: 20px 0 20px 50px;
  width:auto;
  height:300px;
  display:grid;
  grid-template-columns: 500px 500px;
  grid-row: auto auto;
  grid-column-gap: 200px;
  grid-row-gap: 20px;
}
.box{
    background: linear-gradient(99.18deg, #292F38 2.43%, #414652 100.01%);
    padding:20px;
    width: 500px;
    border-radius:10px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:20px;
    text-align: center;
    font-family:sans-serif;
  }

.box2{
    font-size: 22px;
}
@media screen and (max-width:1000px){
    .container{
        grid-template-columns: repeat(1,1fr);
        display: block;
    }
    .box{
        margin-bottom: 10px;
    }
} 

.events h1{
    font-size: 80px;
  }

/* .button-container {
  margin-left:100px ;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 30px;
  height: 30px;
}

.add-button {
  font-size: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 20px;
  width: 20px;
  margin: auto;
  padding: 0;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
} */


#row2 {
	background: black;
	color: white;
    margin-top: 50px;
    border-top-left-radius: 2%;
}
#row2:after {
	content: "";
	display: table;
	clear: both;
}

.column-1 {
	float: left;
	width: 50%;
	padding: 0 10px 80px 100px;
	/* padding-top: 0;
	padding-left: 160px; */
	margin-top: 2rem;
	position: relative;
}


.column-2 {
	float: left;
	width: 50%;
	padding: 10px;
	margin-top: 2rem;
}

.map {
	width: 500px;
	height: 350px;
	border: 0;
	background: linear-gradient(98deg, #292F38 0.63%, #414652 95.79%);

}


.footer-widget-heading h3 {	
	font-weight: bold;
	margin-bottom: 40px;
	position: relative;
}

.loc{
    font-size: 40px;
}

.contact{
    font-size: 40px;
}

.footer-cs{
    font-size: 30px;
}

.address{
    margin-top: 3px;
    font-size: 18px;
}

.mail-id{
    margin-top: 30px;
    font-size: 20px;
}
.copyright-area {
	background: black;
	padding: 2px 0;
    text-align: center;
}
.copyright-text p {
	margin: 0;
	font-size: 14px;
	color: #fff;
}
.copyright-text p a {
	text-decoration: none;
}


/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" /> */



</style>