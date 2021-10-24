<script>
</script>

<body>
	<section class="header">
		<nav>
			<a href="#college-logo">
				<img src="logo2.png" alt="college-logo" />
			</a>

			<a href="#csclub-logo">
				<img src="logo.png" alt="csclublogo" />
			</a>
			<div class="nav-links">
				<i class="fas fa-window-close" />
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#gallery">Gallery</a></li>
					<li><a href="#CP">CP</a></li>
					<li><a href="#PRIT">PRIT</a></li>
					<li><a href="#EDITH">EDITH</a></li>
					<li><a href="#Networking">Networking</a></li>
					<li><a href="#People">People</a></li>
					<li><a href="#Timeline">Timeline</a></li>
				</ul>
				<i class="fas fa-bars" />
			</div>
		</nav>

		<div id="head-box" />

		<div class="page-title">
			<h1>Timeline</h1>
		</div>
	</section>

	<div class="padd" />

	<!---------timeline---------->

	<section class="timeline">
		<div id="line" />
	</section>

	<div class="padd" />

	<section class="contact-us">
		<div id="box">
			<h1 id="location">Location</h1>

			<h1 id="contact-us">Contact Us</h1>

			<div class="address">
				<div style="font-size:48px; font-weight:500">CS Club</div>
				<div style="font-size: 25px;">
					<p>IIITDM Kancheepuram</p>
					<p>Chennai : 600127</p>

					<br>
					
					Email : <a href="mailto: csclub@iiitdm.ac.in">csclub@iiitdm.ac.in</a>
				</div>

			<p class="cpr">Copyrights © 2020 | All Rights Reserved | Done by <span>Web Team </span> </p>
				
				
			</div>
			

			

		</div>

        


	</section>
</body>

<style>
	* {
		margin: 0%;
		padding: 0%;
	}

	#head-box {
		background-color: #000;
		width: 1440px;
		height: 700px;
	}

	span {
		color: #1fdb95;
	}

	
	.address {
		padding-top: 20px;
		position: relative;
		top: -120px;
		left: 650px;
	}

	#location {
		position: relative;
		top: -60px;
		left: -20px;
		font-weight: 600;
		font-size: 50px;
	}

	#contact-us {
		position: relative;
		top: -120px;
		left: 650px;
		font-weight: 600;
		font-size: 50px;
	}

	.padd {
		padding: 100px 100px;
	}

	.header {
		min-height: 100vh;
		width: 100%;
		background-position: center;
		background-size: cover;
		position: relative;
	}


	li a {
		padding: 24px;
	}

	nav {
		display: flex;

		justify-content: space-between;
		align-items: center;
	}

	nav img {
		width: 80px;
	}

	.nav-links {
		flex: 1;
		text-align: right;
	}

	.nav-links ul li {
		list-style: none;
		display: inline-block;

		position: relative;
	}

	.nav-links ul li::after {
		content: "";
		width: 0%;
		height: 1px;
		background: #1fdb95;
		display: block;
		margin: auto;
		transition: 0.5s;
	}

	.nav-links ul li:hover::after {
		width: 50%;
	}

	.page-title {
		width: 90%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.page-title h1 {
		font-size: 120px;
		font-weight: 600;
	}

	#line {
		padding: 10%;
		width: 4px;
		height: 2000px;
		background: #1fdb95;
	}

	#box {
		padding: 10%;
		background: #000000;
		width: 1300px;
		height: 600px;
		border-radius: 40px;
	}

	.cpr {
		position: relative;
		top: 150px;
		right: 350px;
	
	   
	}


</style>
