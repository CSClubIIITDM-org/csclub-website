<script>
	import Card from "../components/Card.svelte";
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

<svelte:head>
	<title>PRIT / CS Club / IIITDM kancheepuram</title>
</svelte:head>

<InitialScreen>Project, Research & Industrial Talks</InitialScreen>
<main>
	<section class="our-aim">
		<div class="content">
			<h2>Our Aim</h2>
			<br />
			<p>
				Projects, Research and Industrial Talks commonly known as PRIT is the
				branch of CS Club which is responsible for all the project activities
				and research work done by the club. We also coordinate talks by industry
				professionals and experts so that students are ready to face the
				industry. The main aim of PRIT is to try and bridge the gap between
				industry and textbook knowledge. We ensure that all of this is done in a
				fun filled, enthusiastic and phased manner because we believe learning
				and fun go hand in hand.
			</p>
		</div>
		<div class="image">
			<img src="/prit-our-aim-image.png" alt="Our aim " />
		</div>
	</section>

	<br /><br />

	<section class="events">
		<h2>Our Events</h2>
		<br />

		<div class="our-events">
			<Card>HTML and Web Dev Session</Card>
			<Card>Cyber Security Awareness</Card>
			<Card>Problem Solving Session</Card>
			<Card>Introduction to Competitive Programming</Card>
		</div>
	</section>

	<br /><br />

	<section class="resources">
		<h2>Resources</h2>
		<br />
		<p>Link- 1:</p>
		<p>Link- 2:</p>
		<p>Link- 3:</p>
		<p>Link- 4:</p>
		<p>Link- 5:</p>
		<p>Link- 6:</p>
	</section>

	<br /><br />
</main>

<style lang="scss">
	main {
		padding: 0.25rem 2rem;
	}

	.our-aim {
		display: grid;
		grid-template-columns: 1fr 1fr;

		.content {
			p {
				font-size: 1.5rem;
			}
		}

		.image {
			display: flex;
			justify-content: flex-end;

			width: 100%;
			height: 100%;

			img {
				width: 60%;
				height: auto;
			}
		}
	}

	.cards {
		display: flex;
		gap: 2rem;

		padding: 1rem 0;

		width: 100%;

		overflow-x: scroll;
		overflow-y: hidden;

		margin-bottom: 3rem;
	}

	.card {
		display: grid;
		place-items: center;

		flex: 1;

		min-width: 20rem;
		width: 20rem;

		padding: 1rem;

		text-align: center;
		font-size: 1.4rem;

		background-image: var(--app-gradient-light);

		border-radius: 1rem;
	}

	.resources {
		font-size: 1.5rem;
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
