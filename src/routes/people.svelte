<script>
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

<InitialScreen>People</InitialScreen>
<main class="center">
	<!--  -->
	<!-- <section></section> -->
	<section id="faculty-advisor">
		<h2>Faculty Advisor</h2>
		<br />
		<div class="picture" />
	</section>
	<br /><br />
	<section id="head-core">
		<h2>Head Core</h2>
		<br />
		<div class="picture" />
	</section>
	<br /><br />
	<section id="core-team">
		<h2>Core Team</h2>
		<br />
		<div class="flex">
			<div class="picture" />
			<span class="spacer" />
			<div class="picture" />
			<span class="spacer" />
			<div class="picture" />
		</div>
		<br /><br />
		<div class="flex">
			<div class="picture" />
			<span class="spacer" />
			<div class="picture" />
			<span class="spacer" />
			<div class="picture" />
		</div>
	</section>
	<br /><br />
	<section id="joint-core">
		<h2>Joint Core</h2>
		<br />
		<section id="cp">
			<h2>CP</h2>
			<br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
			<br /><br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
		</section>
		<br /><br />
		<section id="edith">
			<h2>Edith</h2>
			<br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
			<br /><br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
		</section>
		<br /><br />
		<section id="networking">
			<h2>Networking</h2>
			<br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
			<br /><br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
		</section>
		<br /><br />
		<section id="prit">
			<h2>PRIT</h2>
			<br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
			<br /><br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
		</section>
		<br /><br />
		<section id="web-development-team">
			<h2>Web Development Team</h2>
			<br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
			<br /><br />
			<div class="flex">
				<div class="picture" />
				<span class="spacer" />
				<div class="picture" />
			</div>
		</section>
	</section>
	<br /><br />
</main>

<style lang="scss">
	main {
		padding: 0.25rem 2rem;
	}

	.flex {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
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
		border: 1px solid var(--app-color-primary);
		background: var(--app-color-primary);
		margin: 0 auto;

		img {
			width: auto;
			height: inherit;
			margin: 0;
			box-sizing: border-box;
		}
	}
</style>
