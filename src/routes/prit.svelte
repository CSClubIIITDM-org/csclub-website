<script>
	const events = [
		{ title: "HTML and Web Dev Session" },
		{ title: "Cyber Security Awareness" },
		{ title: "Problem Solving Session" },
		{ title: "Introduction to Competitive Programming" },
	];
</script>

<svelte:head>
	<title>PRIT / CS Club / IIITDM kancheepuram</title>
</svelte:head>

<div class="container">
	<section class="header">
		<h1>Project, Research & Industrial Talks</h1>
	</section>

	<br /><br /><br /><br />

	<main>
		<section class="our-aim-section">
			<div class="content">
				<h2>Our Aim</h2>
				<p>
					Projects, Research and Industrial Talks commonly known as PRIT is the
					branch of CS Club which is responsible for all the project activities
					and research work done by the club. We also coordinate talks by
					industry professionals and experts so that students are ready to face
					the industry. The main aim of PRIT is to try and bridge the gap
					between industry and textbook knowledge. We ensure that all of this is
					done in a fun filled, enthusiastic and phased manner because we
					believe learning and fun go hand in hand.
				</p>
			</div>
			<div class="image">
				<img src="/prit-our-aim-image.png" alt="Our aim " />
			</div>
		</section>

		<br /><br /><br /><br />

		<section class="events-section">
			<h2>Events</h2>

			<div class="cards-section">
				{#each events as { title }}
					<div class="card">
						<p>{title}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="resources-section">
			<h2>Resources</h2>

			QUERY FOR LATER
		</section>
	</main>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;

		padding: 10rem 13rem;

		background-color: rgba(0, 0, 0, 0.5);

		h1 {
			font-size: 7rem;

			text-align: center;
		}
	}

	main {
		width: 85%;
	}

	.our-aim-section {
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

	.cards-section {
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
</style>
