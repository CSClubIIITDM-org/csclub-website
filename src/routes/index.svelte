<script>
	import Card from "../components/Card.svelte";
	import InitialScreen from "../components/InitialScreen.svelte";
	import Spoiler from "../components/Spoiler.svelte";
</script>

<InitialScreen>CS Club IITDM</InitialScreen>
<main>
	<section id="about-us" class="flex">
		<div>
			<h2>About Us</h2>
			<br />
			<p>
				Here at the CS Club, we act as a gateway for students to enter the
				Computer Science Community and Industry. We strive to educate, train,
				and guide students as they build towards a profession in CS Industry. We
				aren't just a club, we're an independent body where students learn
				together, help each other sharpen their skills and create their future
				in the industry.
			</p>
		</div>
		<img src="/designer.png" alt="designer" />
	</section>
	<br /><br />
	<section id="our-events">
		<h2>Our Events</h2>
		<br />
		<div class="our-events">
			<div>
				<Card>Basics of HTML/CSS</Card>
				<Card>Cyber Security Awareness</Card>
				<Card>Cyber Security Awareness</Card>
			</div>
			<div>
				<Card>Problem Solving Session</Card>
				<Card>Introduction to Competitive Programming</Card>
				<Card>Introduction to Competitive Programming</Card>
			</div>
		</div>
	</section>
	<br /><br />
	<section id="faq">
		<h2>FAQ Section</h2>
		<br />
		<p>
			<Spoiler>
				<div slot="title">What does CS Club do?</div>
			</Spoiler>
			<br />
			<Spoiler>
				<div slot="title">Is it only for computer branch?</div>
			</Spoiler>
		</p>
	</section>
	<br /><br />
</main>

<style lang="scss">
	@import "../css/screens.scss";
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

	#about-us {
		font-size: 1.3rem;
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
			font-size: 3rem;
		}

		#about-us {
			font-size: 1.15rem;
		}
	}
</style>
