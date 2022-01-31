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
			<div>
				<Card>HTML and Web Dev Session</Card>
				<Card>Cyber Security Awareness</Card>
			</div>
			<div>
				<Card>Problem Solving Session</Card>
				<Card>Introduction to Competitive Programming</Card>
			</div>
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
	@import "../css/screens.scss";

	main {
		padding: 0.25rem 2rem;
	}

	.our-aim {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1, 1fr);

		.content {
			p {
				font-size: 0.9rem;
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

	.resources {
		font-size: 0.9rem;
	}

	.our-events {
		width: 100%;
		overflow: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		div {
			display: flex;
			flex-direction: row;
			width: 100%;
		}
	}

	@include small-screens {
		main {
			padding: 0.25vw 2vw;
		}

		.flex {
			flex-direction: column;
		}

		h2 {
			font-size: 2.25rem;
		}

		.our-aim {
			grid-template-rows: max-content;

			.content {
				grid-column: 1 / 3;
				grid-row: 1 / 1;
			}

			.image {
				grid-column: 1 / 3;
				grid-row: 2 / 2;
				flex-direction: column;
				align-items: center;
			}
		}
	}
</style>
