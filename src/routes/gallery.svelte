<script>
	import InitialScreen from "../components/InitialScreen.svelte";

	const carouselPhotos = [
		"CS Club IIITDM",
		"Gallery",
		"Competative Programming",
		"Project, Research & Industrial Talks",
		"Educating Information Technology and Hardware",
		"Networking",
		"People",
		"Timeline",
	];

	let index = 0;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};
</script>

<InitialScreen>Gallery</InitialScreen>
<div class="gallery-tiles">
	<div class="tiles">
		<div>
			<h2>CS Club 2019</h2>
		</div>
		<div class="box" />
	</div>

	<div class="tiles">
		<div>
			<h2>Vashisht 2019</h2>
		</div>
		<div class="box" />
	</div>

	<div class="tiles">
		<div>
			<h2>Random Sec</h2>
		</div>
		<div class="box" />
	</div>
</div>

<style>
	.gallery-tiles {
		padding-top: 5%;
		padding-left: 5%;
		padding-right: 5%;
		width: 100%;
	}

	.gallery-tiles h2 {
		font-size: 40px;
		overflow: hidden;
		text-align: center;
	}
	.gallery-tiles h2:before,
	h2:after {
		background-color: var(--app-color-primary);
		content: "";
		display: inline-block;
		height: 2px;
		position: relative;
		vertical-align: middle;
		width: 50%;
	}
	.gallery-tiles h2:before {
		right: 0.5em;
		margin-left: -50%;
	}
	.gallery-tiles h2:after {
		left: 0.5em;
		margin-right: -50%;
	}

	.tiles {
		padding-bottom: 5%;
	}

	.tiles h2 {
		font-family: var(--app-main-font-family);
		font-style: normal;
	}

	.box {
		background-color: var(--app-color-primary);
		box-sizing: border-box;
		padding: 5%;
		margin-top: 1%;
		height: 300px;
	}
</style>
