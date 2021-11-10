<script>
	import { fade } from "svelte/transition";

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

<section>
	<div class="dots__dot dots__dot--active" style="display:hidden" />
	<div class="slides">
		{#each [carouselPhotos[index]] as src (index)}
			<div class="slide" style="transform: translateX({100 * index}%)">
				<h1>{src}</h1>
			</div>
		{/each}
		<button on:click={next}>Next!</button>
		<div class="dots" />
	</div>
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
	section {
		position: absolute;
		top: 120px;
	}
	.slides {
		max-width: 100%;
		height: 300px;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		/* IN THE END */
		overflow: hidden;
	}
	.slide,
	button {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		margin: auto auto;
		display: grid;
		direction: row;
		grid-template-columns: auto;
		grid-template-rows: auto auto auto;
		justify-items: center;
		align-content: center;
		justify-content: center;
		/* THIS creates the animation! */
		transition: transform ease-in-out 2s;
	}
	.dots__dot {
		background: none;
		border: none;
		color: white;
		font-size: 2rem;
		font-weight: 900;
	}

	.dots__dot--active {
		color: #34d399;
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
		background: linear-gradient(98deg, #292f38 0.63%, #414652 95.79%);
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
		background: linear-gradient(
			180deg,
			rgba(41, 47, 56, 0.8) 0%,
			rgba(65, 70, 82, 0.8) 100%
		);
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
</style>
