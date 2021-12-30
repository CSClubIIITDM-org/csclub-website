<script>
	import Card from "../components/Card.svelte";
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

<InitialScreen>Competetive Programming</InitialScreen>
<main>
	<section id="our-aim" class="flex">
		<div>
			<h2>Our Aim</h2>
			<br />
			<p>
				Competitive Programming, commonly known world-wide as CP is a branch of
				CS club that is responsible for conducting events and contests related
				to competitive coding in our college. The main aim of CP division is to
				improve the coding culture in our college so that students find it
				easier to crack interviews in Google, Microsoft, etc. We also conduct
				sessions on various topics in CP to get a better understanding of all
				the algorithms and various other concepts that are used in today’s
				world.
			</p>
		</div>
		<img src="/cp.png" alt="cp" />
	</section>
	<br /><br />
	<section id="our-events">
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
	<section id="resources">
		<h2>Resources</h2>
		<br />
		<p>Link- 1:</p>
		<p>Link- 2:</p>
		<p>Link- 3:</p>
	</section>
	<br /><br />
	<section id="leaderboard">
		<h2>Leaderboard</h2>
		<br />
		<div class="leaderboard">
			<div class="candidate" />
			<div class="candidate" />
			<div class="candidate" />
			<div class="candidate" />
			<div class="candidate" />
			<div class="candidate" />
			<div class="candidate" />
			<div class="candidate" />
			<div class="candidate" />
		</div>
	</section>
	<br /><br />
</main>

<style lang="scss">
	main {
		padding: 0.25rem 2rem;
	}

	.flex {
		display: inline-flex;
		gap: 1rem;
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

	#resources {
		p {
			font-size: 1.5rem;
		}
	}

	#our-aim {
		p {
			font-size: 1.3rem;
		}

		img {
			height: 20rem;
			width: auto;
		}
	}

	.leaderboard {
		display: flex;
		padding: 1rem;
		background: #000000;
		box-shadow: inset 0px 4px 100px rgba(67, 233, 123, 0.5);
		border-radius: 10px;
		flex-direction: column;

		.candidate {
			height: 3.5rem;
			margin-bottom: 1rem;
			width: 100%;
			background: linear-gradient(180deg, #1fdb95 0%, #43e97b 100%);
			box-shadow: 0px 0px 50px #000000;
			border-radius: 10px;
		}

		.candidate:nth-of-type(1) {
			margin-bottom: 10rem;
		}
	}

	@media (max-width: 920px) {
		section {
			p {
				font-size: 0.8rem;
			}
		}
		* h2 {
			font-size: 1.5rem;
		}
		p {
			font-size: 0.8rem;
		}
	}
	@media (max-width: 500px) {
		#cp {
			height: 15rem;
		}
	}
</style>
