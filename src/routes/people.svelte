<script>
	import InitialScreen from "../components/InitialScreen.svelte";

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
			},
		],
		"WebOps Head": [
			{
				name: "Puru Vijayvargia",
				photo: "puru-vijayvargia",
			},
		],
		"Core Team": [
			{
				name: "Ankit Kumar",
				photo: "ankit-kumar-bharti",
			},
			{
				name: "Atharva Kadlag",
				photo: "atharva-kadlag",
			},
			{
				name: "G V Sanjay Reddy",
				photo: "sanjay-reddy",
			},
			{
				name: "Sreenivas Dheeraj",
				photo: "sreenivas-dheeraj",
			},
			{
				name: "Sumit Kumar",
				photo: "sumit-kumar",
			},
		],
		"Competetive Programming": [
			{
				name: "Jashwanth",
				photo: "jaswanth-peddisetti",
			},
			{
				name: "Jitin",
				photo: "chekka-jitin-krishna",
			},
			{
				name: "Somashekhar",
				photo: "somashekhar",
			},
			{
				name: "R Shyam Sundar",
				photo: "shyam-sundar",
			},
			{
				name: "Rohail Alam",
				photo: "rohail-alam",
			},
		],
		EDiTH: [
			{
				name: "Jagadeeshan S",
				photo: "jagadeeshan",
			},
			{
				name: "Mariyam Joory",
				photo: "mariyam",
			},
			{
				name: "Nithish Vasanth",
				photo: "nithish-vasanth",
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
			},
		],
		PRIT: [
			{
				name: "Himanshu Malviya",
				photo: "himanshu",
			},
			{
				name: "Yash Agarwal",
				photo: "yash-agarwal",
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
				{#each person as { name, photo }}
					<div class="person">
						<div class="picture">
							<img src="/people/{photo}.webp" alt={name} use:lazy />
						</div>

						<br />

						{name}
					</div>
				{/each}
			</div>
		</section>
		<br /><br /><br /><br />
	{/each}

	<br /><br />
</main>

<style lang="scss">
	@import "../css/screens.scss";

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
			font-size: 3rem;
		}
	}
</style>
