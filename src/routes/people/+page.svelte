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
				name: "Subash Mylraj",
				photo: "subash",
				linkedIn: "subash-m-1bba75130",
			},
		],
		"WebOps Head": [
			{
				name: "Puru Vijayvargia",
				photo: "puru-vijayvargia",
				twitter: "puruvjdev",
			},
		],
		"Core Team": [
			{
				name: "Ankit Kumar",
				photo: "ankit-kumar-bharti",
				linkedIn: "ankit-kumar-a19753205",
			},
			{
				name: "Atharva Kadlag",
				photo: "atharva-kadlag",
				linkedIn: "atharvakadlag",
			},
			{
				name: "G V Sanjay Reddy",
				photo: "sanjay-reddy",
				linkedIn: "sanjay-reddy-22448b1b8",
			},
			{
				name: "Sreenivas Dheeraj",
				photo: "sreenivas-dheeraj",
			},
			{
				name: "Sumit Kumar",
				photo: "sumit-kumar-41ba74192",
			},
		],
		"Competetive Programming": [
			{
				name: "Jashwanth",
				photo: "jaswanth-peddisetti",
				linkedIn: "jashwanth-peddisetty-940752200",
			},
			{
				name: "Jitin",
				photo: "chekka-jitin-krishna",
			},
			{
				name: "Somashekhar",
				photo: "somashekhar",
				linkedIn: "somashekhar-itagi-6836691a5",
			},
			{
				name: "R Shyam Sundar",
				photo: "shyam-sundar",
				linkedIn: "shyam-sundar-renudevan-228325200",
			},
			{
				name: "Rohail Alam",
				photo: "rohail-alam",
				linkedId: "rohail-alam-362a13200",
			},
		],
		EDiTH: [
			{
				name: "Jagadeeshan S",
				photo: "jagadeeshan",
				linkedIn: "jagadeeshan-s-b572b51b0",
			},
			{
				name: "Mariyam Joory",
				photo: "mariyam",
			},
			{
				name: "Nithish Vasanth",
				photo: "nithish-vasanth",
				linkedIn: "nithish-vasanth-007",
			},
			{
				name: "Yerramsetti V S N Sai Mohith",
				photo: "mohith",
			},
		],
		Networking: [
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
		PRIT: [
			{
				name: "Himanshu Malviya",
				photo: "himanshu",
				linkedIn: "himanshu-malviya-5599a5202",
			},
			{
				name: "Yash Agarwal",
				photo: "yash-agarwal",
				linkedIn: "yash-agrawal-6340a8201",
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
