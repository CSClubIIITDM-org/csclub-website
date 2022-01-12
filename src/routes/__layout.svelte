<script>
	import Footer from "../components/Footer.svelte";
	import Nav from "../components/Nav.svelte";
	import "../css/global.scss";

	let innerHeight = 0;
	let main = undefined;

	$: {
		// see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
		let vh = innerHeight * 0.01;
		main && main.style.setProperty("--app-viewport-height", `${vh}px`);
	}
</script>

<svelte:window bind:innerHeight />
<svelte:head>
	<style>
		body {
			box-sizing: border-box;
		}
	</style>
</svelte:head>
<main style="height: auto;" bind:this={main}>
	<Nav />
	<slot />
	<div class="footer">
		<Footer />
	</div>
</main>

<style lang="scss">
	div.footer {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		justify-content: center;
	}
</style>
