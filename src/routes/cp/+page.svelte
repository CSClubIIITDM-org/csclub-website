<script>
	import Card from "../../components/Card.svelte";
	import InitialScreen from "../../components/InitialScreen.svelte";
</script>

<svelte:head>
	<title>Competitive Programming / CS Club / IIITDM Kancheepuram</title>
</svelte:head>

<InitialScreen>Competitive Programming</InitialScreen>
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
			<div>
				<Card>Learn DSA 1.0</Card>
				<Card>Learn DSA 2.0</Card>
				<Card>Learn DSA 3.0</Card>
				<Card actions id="codechef-iiitdmk-chapter-induction-ceremony">
					<span slot="content">
						Codechef IIITDMK Chapter Induction Ceremony
					</span>
					<div slot="modal-content">
						<h3>Event Type</h3>
						<span>Seminar</span><br />
						<h3>Start Date and Time</h3>
						<span>26-12-2021 19:00</span><br />
						<h3>Participation</h3>
						<span>50</span><br /><br />
						<h3>Details</h3>
						<div>
							Introducing the team of Codechef IIITDMK Chapter and a brief intro
							to Competitive programming
						</div>
					</div>
				</Card>
			</div>
			<div>
				<Card actions id="the-codetrix">
					<span slot="content">THE CODETRIX</span>
					<div slot="modal-content">
						<h3>Event Type</h3>
						<span>Contest</span><br />
						<h3>Start Date and Time</h3>
						<span>10-10-2021 21:00 </span><br />
						<h3>Participation</h3>
						<span>64</span><br />
						<h3>Contest Link</h3>
						<div>
							<a href="https://www.codechef.com/TCDX21TS">TCDX21TS</a>
						</div>
						<h3>Ranklist</h3>
						<div>
							<a href="https://www.codechef.com/rankings/TCDX2021">TCDX2021</a>
						</div>
						<br />
						<h3>Details</h3>
						<div>
							A beginner friendly contest with focused on problem solving
							fundamentals and basic DSA.
						</div>
					</div>
				</Card>
				<Card actions id="the-codetrix-2">
					<span slot="content">THE CODETRIX - 2</span>
					<div slot="modal-content">
						<h3>Event Type</h3>
						<span>Contest</span><br />
						<h3>Start Date and Time</h3>
						<span>30-10-2021 21:00</span><br />
						<h3>Participation</h3>
						<span>74</span><br />
						<h3>Contest Link</h3>
						<div>
							<a href="https://www.codechef.com/CDTX2021">CDTX2021</a>
						</div>
						<h3>Ranklist</h3>
						<div>
							<a href="https://www.codechef.com/rankings/CDTX2021">CDTX2021</a>
						</div>
						<br />
						<h3>Details</h3>
						<div>
							Second edition of the Codetrix contest. Problems on new concepts
							like string, bit manipulation, Dynamic Programming
						</div>
					</div>
				</Card>
				<Card actions id="get-set-code-only-for-first-years">
					<span slot="content">Get Set Code - Only for First Years</span>
					<div slot="modal-content">
						<h3>Event Type</h3>
						<span>Contest</span><br />
						<h3>Start Date and Time</h3>
						<span>22-1-2022 21:00</span><br />
						<h3>Participation</h3>
						<span>129</span><br />
						<h3>Contest Link</h3>
						<div>
							<a href="https://www.codechef.com/GSCO2022">GSCO2022</a>
						</div>
						<h3>Ranklist</h3>
						<div>
							<a href="https://www.codechef.com/rankings/GSCO2022">GSCO2022</a>
						</div>
						<br />
						<h3>Details</h3>
						<div>
							An introductory contest for our First year students to kickstart
							their CP journey.
						</div>
					</div>
				</Card>
				<Card actions id="code-byte">
					<span slot="content">CODE BYTE</span>
					<div slot="modal-content">
						<h3>Event Type</h3>
						<span>Contest</span><br />
						<h3>Start Date and Time</h3>
						<span>30-1-2022 21:00</span><br />
						<h3>Participation</h3>
						<span>150 (expected)</span><br />
						<h3>Contest Link</h3>
						<div>
							<a href="https://www.codechef.com/ACHN2022">ACHN2022</a>
						</div>
						<br />
						<h3>Details</h3>
						<div>
							First open to all IIITDM students contest of 2022. You'll find
							some good implementation and DSA problems in this one. This
							contest had special prizes for girls on the occasion of Girl Child
							Day.
						</div>
					</div>
				</Card>
			</div>
		</div>
	</section>
	<br /><br />
</main>

<style lang="scss">
	@import "../../css/screens.scss";

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

	#our-aim {
		p {
			font-size: 0.95rem;
		}

		img {
			height: 20rem;
			width: auto;
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
	}
</style>
