<script>
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

<svelte:head>
	<title>Timeline / CS Club / IIITDM Kancheepuram</title>
</svelte:head>

<InitialScreen>Timeline</InitialScreen>

<main>
	<section class="timeline">
		<div class="left">hello</div>
		<hr class="vertical-line" />
		<div class="right">world</div>
	</section>
	<br /><br />
</main>

<style lang="scss">
	@import "../css/screens.scss";

	main {
		padding: 0.25rem 2rem;
	}

	.timeline {
		display: flex;
		flex: none;

		.left,
		.right {
			left: 0;
		}
	}

	.vertical-line {
		border: 0;
		width: 4px;
		height: 2000px;
		background: #1fdb95;
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
