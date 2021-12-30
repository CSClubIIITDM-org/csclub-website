<script>
	import Footer from "../components/Footer.svelte";
	import Nav from "../components/Nav.svelte";
	import "../css/global.scss";
</script>

<main style="height: auto;">
	<Nav />
	<slot />
	<div class="footer">
		<Footer />
	</div>
</main>

<style>
	div.footer {
		display: flex;
		width: 100vw;
		justify-content: center;
	}
</style>
