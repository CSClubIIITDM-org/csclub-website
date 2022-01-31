<script>
	import { fadeIn, fadeOut } from "../transitions/fade";
	import { mdiClose } from "@mdi/js";
	import { createEventDispatcher } from "svelte";
	import AppIcon from "./AppIcon.svelte";

	/** @type {string} */
	export let current;

	/** @param {string} path */

	const isCurrent = (path) => path === current;

	const dispatch = createEventDispatcher();
	$: current && dispatch("close");
</script>

<svelte:head>
	<style>
		body {
			overflow: hidden;
		}
	</style>
</svelte:head>
<nav in:fadeIn out:fadeOut>
	<div class="close-button-container">
		<button on:click={() => dispatch("close")}>
			<AppIcon path={mdiClose} fill="var(--app-color-dark)" size={40} />
		</button>
	</div>
	<div class="links-container">
		<a href="/" aria-current={isCurrent("/")}>HOME</a>
		<!-- <a href="/gallery" aria-current={isCurrent("/gallery")}>GALLERY</a> -->
		<a href="/cp" aria-current={isCurrent("/cp")}>CP</a>
		<a href="/prit" aria-current={isCurrent("/prit")}>PRIT</a>
		<a href="/edith" aria-current={isCurrent("/edith")}>EdITH</a>
		<a href="/networking" aria-current={isCurrent("/networking")}>NETWORKING</a>
		<a href="/people" aria-current={isCurrent("/people")}>PEOPLE</a>
		<!-- <a href="/timeline" aria-current={isCurrent("/timeline")}>TIMELINE</a> -->
	</div>
</nav>

<style lang="scss">
	@import "../css/screens.scss";

	nav {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		height: avh(100);
		width: 100%;
		backdrop-filter: blur(40px);
		display: grid;
		grid-template-rows: auto 1fr;
		justify-content: center;
		align-items: center;
	}
	.close-button-container {
		display: flex;
		justify-content: flex-end;
		padding: 1rem 1rem 0 0;
	}
	.close-button-container button {
		--size: 3rem;
		height: var(--size);
		width: var(--size);
		border-radius: 50%;
	}
	.close-button-container button:focus {
		background-color: rgba(var(--app-color-dark-rgb), 0.2);
	}
	.links-container {
		display: grid;
		grid-template-rows: repeat(8, 1fr);
		justify-content: center;
		align-items: center;
		height: calc(avh(100) - 96px);
		width: 100vw;
	}
	a {
		text-align: center;
		font-size: 1.2rem;
	}
</style>
