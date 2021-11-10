<script>
	const carouselPhotos = [
		"CS Club IIITDM",
		"Gallery",
		"Competative Programming",
		"Project, Research & Industrial Talks",
		"Educating Information Technology and Hardware",
		"Networking",
		"People",
		"Timeline",
	];

	let index = 0;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};
</script>

<body height="auto">
	<br /><br />
	<div class="heading">
		<h1>Networking</h1>
	</div>

	<div id="row">
		<div class="column_1">
			<h2 class="qq">Our Aim</h2>
			<p>
				The greatest invention created in the information age, the INTERNET. We
				the Networking Branch work towards spreading the influence and events of
				the CS Club and form connections with Other colleges and technical
				institutes.
			</p>
			<p>
				We help bring the creative part of the CS club by designing Posters,
				Updating Social Media through Regular POsts, and connecting the students
				to the Computer Industry. Our branch is the glue that connects the other
				3 branches by spreading awareness of events and talks and helping bring
				projects to the students.
			</p>
		</div>
	</div>

	<img
		id="pic"
		width="500em"
		height="500em"
		src="https://bit.ly/fcc-relaxing-cat"
		alt="Add pic here"
	/>
	<br /><br />
	<div id="main" class="main">
		<div id="first" class="first">
			<div style="font-size:2.0rem">Location</div>

			<div style="font-size:2.0rem">Contact Us:</div>
			<div style="font-size:2.2rem">CS Club</div>
			<div>
				<p>IIITDM Kancheepuram,</p>
				<p>Chennai : 600127.</p>
			</div>
			<div>
				Email: <a href="mailto: csclub@iiitdm.ac.in">csclub@iiitdm.ac.in</a>
			</div>
		</div>
	</div>
	<p class="copyright">
		Copyrights © 2020 | All Rights Reserved | Done by
		<span>Web Team</span>
	</p>
</body>

<section />

<style>
	body {
		background-color: #101827;
		height: 200%;
	}
	p {
		color: whitesmoke;
	}

	section {
		position: absolute;
		top: 120px;
	}

	.heading {
		background: black;
		color: #34d399;
		text-align: center;
		font-size: 2.5rem;
		padding: 170px 250px;
		margin: 0;
	}

	.column_1 {
		float: left;
		width: 55%;
		padding: 50px;
		margin-top: 2rem;
	}

	.column_1 h2 {
		font-size: 50px;
		color: #3bdf8a;
	}

	.column_1 p {
		padding: 15px 0;
		font-size: 20px;
		color: white;
	}

	.copyright {
		color: gray;
		text-align: center;
	}

	.first {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 50px;
		margin: 10px;
		color: white;
	}

	.first p {
		letter-spacing: 0.5px;
		font-size: 1.25rem;
		margin-bottom: 10px;
	}
	.main {
		margin: 35px;
		background: black;
		width: auto;
		height: auto;
		border-radius: 16px;
		flex-direction: centre;
	}
</style>
