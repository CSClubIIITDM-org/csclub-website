<script>
	import { mdiTwitter, mdiLinkedin } from "@mdi/js";
	import InitialScreen from "../../components/InitialScreen.svelte";
	import AppIcon from "../../components/AppIcon.svelte";

	let isLazysizesImported = false;

	const people = {
		"Faculty Advisor": [
			{
				name: "Dr. Masilamani V",
				photo: "masilamani",
			},
		],
		"Head Core": [
			{
				name: "Atharva Kadlag",
				photo: "atharva-kadlag",
				linkedIn: "atharvakadlag",
			},
		],
		"Core Team": [
			{
				name: "Naveen Rampuram",
				photo: "naveen-rampuram",
			},
			{
				name: "Rohail Alam",
				photo: "rohail-alam",
				linkedId: "rohail-alam-362a13200",
			},
			{
				name: "Nithish Vasanth",
				photo: "nithish-vasanth",
				linkedIn: "nithish-vasanth-007",
			},
			{
				name: "Jagadeeshan S",
				photo: "jagadeeshan",
				linkedIn: "jagadeeshan-s-b572b51b0",
			},
			{
				name: "Himanshu Malviya",
				photo: "himanshu",
				linkedIn: "himanshu-malviya-5599a5202",
			},
			{
				name: "Jayavardhan Reddy",
				photo: "jayavardhan-reddy",
			},
			{
				name: "Dheeraj Kumar",
				photo: "dheeraj-kumar",
			},
			{
				name: "Khushal Gautam",
				photo: "khushal-gautam",
				twitter: "khushal-gautam-20a274226",
			},
		],
		"Competetive Programming": [
			{
				name: "Dheeraj Singh",
				photo: "dheeraj-singh",
			},
			{
				name: "N Navaneethakrishna",
				photo: "navaneethakrishna",
			},
			{
				name: "R Anjana Narayan",
				photo: "anjana-narayan",
			},
			{
				name: "Rahul N",
				photo: "rahul",
			},
		],
		EdITH: [
			{
				name: "Nandhakumaran M",
				photo: "nandhakumaran",
			},
			{
				name: "Suhas N",
				photo: "suhas",
			},
			{
				name: "Karan Kishore",
				photo: "karan-kishore",
			},
			{
				name: "Sibi M",
				photo: "sibi",
			},
		],
		PRIT: [
			{
				name: "Jyothikrishna",
				photo: "sajja-jyothikrishna",
			},
			{
				name: "Abhishek M J",
				photo: "abhishek-mj",
				linkedIn: "abhishek-m-j-607964225",
			},
			{
				name: "Anish V Thomas",
				photo: "anish-v-thomas",
			},
			{
				name: "U.Anandhakumar",
				photo: "anandhakumar",
			},
		],
		Networking: [
			{
				name: "K Jai Krishna",
				photo: "jai-krishna",
			},
			{
				name: "Vibhav",
				photo: "vibhav",
			},
			{
				name: "B.Saish",
				photo: "saish",
			},
		],
	};

	/**
	 * @param {HTMLImageElement} node
	 */
	function lazy(node) {
		const srcVal = node.src;
		node.src = "";
		node.dataset.src = srcVal;

		node.classList.add("lazyload");

		if (!isLazysizesImported) {
			import("lazysizes");
			isLazysizesImported = true;
		}
	}
</script>

<svelte:head>
	<title>People / CS Club / IIITDM Kancheepuram</title>
</svelte:head>

<InitialScreen>People</InitialScreen>

<main class="center">
	{#each Object.entries(people) as [role, person]}
		<section class="people-container">
			<h2>{role}</h2>

			<br /><br />

			<div class="grid">
				{#each person as { name, photo, linkedIn, twitter }}
					<div class="person">
						<div class="picture">
							<img src="/people/{photo}.webp" alt={name} use:lazy />
						</div>

						<br />

						<span>{name}</span>

						<br />

						<div class="flex social-handles">
							{#if twitter}
								<a
									href="https://twitter.com/{twitter}"
									target="_blank"
									rel="noopener"
								>
									<AppIcon fill="#fff" path={mdiTwitter} size={32} />
								</a>
							{/if}
							{#if linkedIn}
								<a
									href="https://linkedin.com/in/{linkedIn}"
									target="_blank"
									rel="noopener"
								>
									<AppIcon fill="#fff" path={mdiLinkedin} size={32} />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</section>
		<br /><br /><br /><br />
	{/each}
</main>

<style lang="scss">
	@import "../../css/screens.scss";

	main {
		padding: 0.25rem 2rem;
	}

	.people-container {
		width: 100%;

		display: grid;
		place-items: center;
	}

	.grid {
		width: 100%;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 15rem));
		gap: 1rem;
		justify-content: center;
	}

	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
	}

	.person {
		display: grid;
		place-items: center;
	}

	.picture {
		box-sizing: border-box;
		padding: 0;
		width: 200px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;

		background: var(--app-color-primary);
		margin: 0 auto;
		z-index: 2;

		img {
			// from https://stackoverflow.com/a/40466110
			object-fit: cover;
			border-radius: inherit;
			width: 100%;
			height: inherit;
			margin: 0;
			box-sizing: border-box;
		}
	}

	@include small-screens {
		main {
			padding: 0.25vw 2vw;
		}

		h2 {
			font-size: 2.25rem;
		}
	}
</style>
