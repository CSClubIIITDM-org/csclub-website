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
	<div class="slide">
		<h1>Competative Programming</h1>
	</div>
	<br /><br />
	<img id="cp" src="/cp.png" alt="cp" />
	<h1>Our Aim</h1>
	<br /><br />
	<p style="font-size:1.3rem;">
		Competitive Programming, commonly known world-wide as CP is a branch of CS
		club that is responsible for conducting events and contests related to
		competitive coding in our college. The main aim of CP division is to improve
		the coding culture in our college so that students find it easier to crack
		interviews in Google, Microsoft, etc. We also conduct sessions on various
		topics in CP to get a better understanding of all the algorithms and various
		other concepts that are used in today’s world.
	</p>
	<br /><br />
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
	<h1>Resources</h1>
	<br />
	<p style="font-size:1.5rem">Link- 1:</p>
	<br />
	<p style="font-size:1.5rem">Link- 2:</p>
	<br />
	<p style="font-size:1.5rem">Link- 3:</p>
	<br /><br />
	<h1>Leaderboard</h1>
	<br /><br />
	<div class="leaderboard">
		<div class="candidate" style="margin-bottom: 10rem" />
		<div class="candidate" />
		<div class="candidate" />
		<div class="candidate" />
		<div class="candidate" />
		<div class="candidate" />
		<div class="candidate" />
		<div class="candidate" />
		<div class="candidate" style="margin-bottom: 0rem" />
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
		background: rgb(31, 41, 55);
		z-index: 100;
	}
	.title {
		text-decoration: none;
		font-size: 35px;
		line-height: 80px;
		padding: 0 10px;
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
		color: white;
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
		background: rgba(0, 0, 0, 0.5);
		height: 350px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	#cp {
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
		background: linear-gradient(98deg, #292f38 0.63%, #414652 95.79%);
		border-radius: 40px;
	}
	.leaderboard {
		display: flex;
		padding: 1rem;
		background: #000000;
		box-shadow: inset 0px 4px 100px rgba(67, 233, 123, 0.5);
		border-radius: 10px;
		flex-direction: column;
	}
	.candidate {
		height: 2.5rem;
		margin-bottom: 1rem;
		width: 100%;
		background: linear-gradient(180deg, #1fdb95 0%, #43e97b 100%);
		box-shadow: 0px 0px 50px #000000;
		border-radius: 10px;
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
		color: #34d399;
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
			background: rgb(31, 41, 55);
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
	}
	@media (max-width: 500px) {
		#cp {
			height: 15rem;
		}
	}
	@media (max-width: 400px) {
		.title {
			font-size: 25px;
		}
	}
</style>
