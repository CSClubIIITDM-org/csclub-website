<script>
	import Card from "../components/Card.svelte";
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

<InitialScreen>Educating Information Technology and Hardware</InitialScreen>
<main>
	<section id="our-aim" class="flex">
		<div>
			<h2>Our Aim</h2>
			<br />
			<p>
				Education in Information Technology and Hardware commonly known as EDiTH
				is a branch of the CS Club that strives to create opportunities for
				students to explore a variety of domains in Computer Science - bridging
				the gap between software and hardware. We help students explore
				different areas of interest by providing them a social environment where
				students with various technology experiences can come together and share
				their knowledge and expertise.
			</p>
			<br /><br />
			<p>
				The hands-on experience that we provide increases self-reliance and
				interest. Keeping sessions on a myriad of topics ranging from Logic to
				Cybersecurity keeps them up to date with the ever evolving technology.
				Conducting guest lectures and workshops aid students to get exposure to
				new facets of the subject beyond the conventional classrooms.
			</p>
		</div>
		<img src="/edith.png" alt="edith" />
	</section>
	<br /><br />
	<section id="our-events">
		<h2>Our Events</h2>
		<br />
		<div class="our-events">
			<Card>Basics of HTML/CSS</Card>
			<Card>Github Session</Card>
			<Card>Sudo !! CTF</Card>
			<Card>Session on JavaScript</Card>
			<Card>Session on Linux, WSL, Security Challanges</Card>
		</div>
	</section>
	<br /><br />
</main>

<style lang="scss">
	main {
		padding: 0.25rem 2rem;
	}

	img {
		height: 20rem;
		width: auto;
	}

	.flex {
		display: inline-flex;
		gap: 1rem;
	}

	#our-aim {
		font-size: 1.3rem;
	}

	.our-events {
		width: 100%;
		overflow: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem;
		margin: 0.5rem;

		* {
			padding: 5rem;
		}
	}
</style>
