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
<h1>Project,Research & Industrial Talks</h1>
</div>


<div id="row">
    <div class="column_1">
        <h2>Our Aim</h2>
        <p>Projects, Research and Industrial Talks commonly known as PRIT is the branch of CS Club which is responsible for all the project activities and research work done by the club. We also coordinate talks by industry professionals and experts so that students are ready to face the industry. The main aim of PRIT is to try and bridge the gap between industry and textbook knowledge. We ensure that all of this is done in a fun filled, enthusiastic and phased manner because we believe learning and fun go hand in hand.</p>
    </div>
    <div class="column_2">
        <!-- <img src=" "> -->
    </div>
</div>

<div class="events">
    <h1>Our Events</h1>
    <div class="container">
      <div class="box box2">HTML and Webdev Session</div>
      <div class="box box2">Cyber Security Awareness</div>
      <div class="box box2">Problem Solving Session</div>
      <div class="box">Introduction to Competitive Programming</div>
    </div>
  </div>

<div class="resources">
    <h1>Resources</h1>
    <p class="links">Link 1:</p>
    <p class="links">Link 2:</p>
    <p class="links">Link 3:</p>
    <p class="links">Link 4:</p>
    <p class="links">Link 5:</p>
    <p class="links">Link 6:</p>
</div>  

<footer>
    <div class="loc" style="grid-column:1/2; grid-row:1/2"><h1>Location</h1></div>
    <div  style="grid-column:2/3; grid-row:1/2"><h1>Contact Us</h1></div>
    <div class="loc" style="grid-column:1/2; grid-row:2/5" id="mapid">
        <a
            href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology,+Design+and+Manufacturing,+Kancheepuram/@12.8379343,80.1351554,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525851fbcd3b6b:0x9f1067aa71e3898e!8m2!3d12.8379343!4d80.1373441"
            ><img src="/" alt="map" /></a
        >
    </div>
    <div style="grid-column:2/3; grid-row:2/3; font-size:1.8rem">CS Club</div>
    <div style="grid-column:2/3; grid-row:3/4">
        <p>IIITDM Kancheepuram</p>
        <p>Chennai: 600127</p>
    </div>
    <div style="grid-column:2/3; grid-row:4/5">
        Email: <a href="mailto: csclub@iiitdm.ac.in">csclub@iiitdm.ac.in</a>
    </div>
</footer>
<p class="copyright" style="background:black">
    Copyrights © 2020 | All Rights Reserved | Done by
    <span><a href="people">Web Team</a></span>
</p>


<style>
:root{
    --text_color: linear-gradient(180deg, #34D399 0%, #43E97B 100%);
   --hoverr:white;
}  

.title {
    text-decoration: none;
    background-color: var(--text_color);
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
    color: var(--hoverr);
}

nav > ul > li {
    float: left;
}

nav a {
    background-color: var(--text_color);
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
    font-size: 60px;
  }

.resources{
    margin-bottom: 50px;
}  
.resources h1{
    font-size: 60px;
}

.links{
    margin-top: 10px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
}

footer {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-template-rows: 5rem 5rem 5rem 5rem;
		row-gap: 1rem;
		column-gap: 10%;
        background: black;
        border-top-left-radius: 4%;
        border-top-right-radius: 4%;
        margin-top: 50px;
	}
	#mapid {
		height: 15rem;
		width: 70%;
		background: linear-gradient(
			119.1deg,
			#292f38 1.68%,
			#292f38 1.69%,
			#414652 100%
		);
		box-shadow: 0px 4px 4px #000000;
		border-radius: 40px;
	}
	#mapid img {
		height: 100%;
		width: 100%;
		border-radius: 40px;
	}
	.copyright {
		text-align: center;
	}
	.copyright span {
		color:  var(--text_color);
	}
    
    .copyright span:hover>a{
        color:var(--hoverr);
    }

.loc{
    margin-left: 80px;
}    

</style>