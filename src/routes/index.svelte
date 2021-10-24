<script>
</script>

<header>
	<div>
		<nav>
			<input type="checkbox" id="check" />
			<label for="check" class="checkbtn "><i class="fas fa-bars" />☰</label>
			<img src="/insignia.png" width="70" height="70" alt="" />
			<span class="vl" />
			<img src="/logo.png" width="70" height="70" alt="" />
			<a href="." class="title"><strong>CS CLUB</strong></a>
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
<section>
	<div class="dots__dot dots__dot--active" style="display:hidden" />
	<div class="slide"><h1>CS Club IIITDM</h1></div>
	<br /><br />
	<img id="designer" src="/designer.png" alt="designer" />
	<h1>About Us</h1>
	<br /><br />
	<p style="font-size:1.3rem;">
		Here at the CS Club, we act as a gateway for students to enter the Computer
		Science Community and Industry. We strive to educate, train, and guide
		students as they build towards a profession in CS Industry. We aren't just a
		club, we're an independent body where students learn together, help each
		other sharpen their skills and create their future in the industry.
	</p>
	<br /><br />
	<h1>Our Events</h1>
	<br /><br />
	<div class="events">
		<div class="event">Basics of HTML/CSS</div>
		<div class="event">Cyber Security Awareness</div>
		<div class="event">Problem Solving Session</div>
		<div class="event" style="padding-top:7%">
			Introduction to Competative Programming
		</div>
	</div>
	<br /><br />
	<h1>FAQ Section</h1>
	<div class="faqs">What does CS Club do?<span class="add"> + </span></div>
	<div class="faqs">
		Is it only for Computer branch?<span class="add"> + </span>
	</div>
	<br /><br />
	<footer>
		<div style="grid-column:1/2; grid-row:1/2"><h1>Location</h1></div>
		<div style="grid-column:2/3; grid-row:1/2"><h1>Contact Us</h1></div>
		<div style="grid-column:1/2; grid-row:2/5" id="mapid">
			<a
				href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology,+Design+and+Manufacturing,+Kancheepuram/@12.8379343,80.1351554,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525851fbcd3b6b:0x9f1067aa71e3898e!8m2!3d12.8379343!4d80.1373441"
				><img src="/map.jpeg" alt="map" /></a
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
	<p class="copyright">
		Copyrights © 2020 | All Rights Reserved | Done by
		<span>Web Team</span>
	</p>
</section>

<style>
	nav {
		height: 100px;
		width: 100%;
		position: fixed;
		left: 0;
		background: var(--nav-bar);
		z-index: 100;
	}
	nav img {
		margin-top: 10px;
	}
	.title {
		text-decoration: none;
		font-size: 35px;
		line-height: 80px;
		font-weight: bold;
	}
	nav ul {
		float: right;
		margin-right: 20px;
	}
	nav ul li {
		display: inline-block;
		line-height: 80px;
		margin: 0 5px;
	}
	nav ul li a:hover {
		color: var(--hover);
	}
	.checkbtn {
		font-size: 30px;
		float: right;
		margin-right: 40px;
		line-height: 80px;
		display: none;
	}
	#check {
		display: none;
	}
	section {
		position: absolute;
		top: 120px;
	}
	.slide {
		background: var(--slide-bar);
		height: 350px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#designer {
		float: right;
		height: 20rem;
	}
	.events {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-template-rows: 10rem 10rem;
		row-gap: 2rem;
		column-gap: 5%;
		margin-left: 5%;
		margin-right: 5%;
	}
	.event {
		font-size: 1.8rem;
		text-align: center;
		padding-top: 10%;
		height: 10rem;
		background: var(--app-gradient-light);
		border-radius: 40px;
	}
	.faqs {
		position: relative;
		margin-top: 2rem;
		height: 4rem;
		font-size: 1.5rem;
		padding-left: 1rem;
		padding-top: 1rem;
		z-index: -1;
		background: var(--app-gradient-light);
		box-shadow: 0px 4px 4px #000000;
		border-radius: 20px;
	}
	.add {
		position: absolute;
		right: 1rem;
	}
	footer {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-template-rows: 5rem 5rem 5rem 5rem;
		row-gap: 1rem;
		column-gap: 10%;
	}
	#mapid {
		height: 15rem;
		width: 100%;
		background: var(--app-gradient-light);
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
		color: var(--app-color-primary);
	}
	@media (max-width: 920px) {
		.checkbtn {
			display: block;
		}
		ul {
			position: fixed;
			width: 100%;
			height: 100vh;
			top: 80px;
			left: -100%;
			background: var(--nav-bar);
			text-align: center;
			transition: all 0.5s;
		}
		nav ul li {
			display: block;
			font-size: 20px;
		}
		#check:checked ~ ul {
			left: 0;
		}

		h1 {
			font-size: 1.5rem;
		}
		p {
			font-size: 0.8rem;
		}
		.events {
			grid-template-rows: 6rem 6rem;
		}
		.event {
			height: 5rem;
			font-size: 0.8rem;
		}
		.faqs {
			font-size: 1rem;
		}
	}
	@media (max-width: 500px) {
		#designer {
			height: 15rem;
		}
	}
	@media (max-width: 400px) {
		.title {
			font-size: 25px;
		}
	}
</style>
