<script>
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

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
</style>
