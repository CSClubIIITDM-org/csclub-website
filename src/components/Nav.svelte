<script>
	import { page } from "$app/stores";
	import { mdiMenu } from "@mdi/js";
	import AppIcon from "./AppIcon.svelte";
	import MobileNav from "./MobileNav.svelte";

	let isMobileNavOpen = false;
</script>

<header>
	<!-- <img src="../../static/" /> -->
	<div class="logo-alt" />
	<span />
	<nav>
		<a href="/" aria-current={$page.path === "/" ? "page" : "false"}>HOME</a>

		<a
			href="/gallery"
			aria-current={$page.path === "/gallery" ? "page" : "false"}
		>
			GALLERY
		</a>

		<a href="/cp" aria-current={$page.path === "/cp" ? "page" : "false"}>
			CP
		</a>

		<a href="/prit" aria-current={$page.path === "/prit" ? "page" : "false"}>
			PRIT
		</a>

		<a href="/edith" aria-current={$page.path === "/edith" ? "page" : "false"}>
			EDiTH
		</a>

		<a
			href="/networking"
			aria-current={$page.path === "/networking" ? "page" : "false"}
		>
			NETWORKING
		</a>

		<a
			href="/people"
			aria-current={$page.path === "/people" ? "page" : "false"}
		>
			PEOPLE
		</a>

		<a
			href="/timeline"
			aria-current={$page.path === "/timeline" ? "page" : "false"}
		>
			TIMELINE
		</a>
	</nav>

	<div class="buttons">
		<button class="open-menu" on:click={() => (isMobileNavOpen = true)}>
			<AppIcon path={mdiMenu} fill="var(--app-color-dark)" />
		</button>
	</div>
</header>

{#if isMobileNavOpen}
	<MobileNav on:close={() => (isMobileNavOpen = false)} current={$page.path} />
{/if}

<style>
	header {
		position: sticky;
		z-index: 999999;
		top: 0;
		left: 0;

		width: 100%;

		padding: 1rem;

		display: grid;
		grid-template-columns: auto 1fr auto auto;
		align-items: center;

		background-color: rgba(var(--app-color-light-rgb), 0.7);
		backdrop-filter: blur(70px);
		box-shadow: 0px 4.4px 5.3px rgba(0, 0, 0, 0.162),
			0px 14.7px 17.9px rgba(0, 0, 0, 0.238), 0px 66px 80px rgba(0, 0, 0, 0.4);
	}
	nav {
		width: max-content;
		display: flex;
		gap: 1.5rem;
	}

	nav a {
		letter-spacing: 0.8px;
	}
	nav a[aria-current="page"] {
		color: var(--app-color-dark);
	}
	.logo-alt {
		--size: 60px;
		height: var(--size);
		width: var(--size);
		background: var(--app-color-primary);
		border-radius: 50%;
	}
	.buttons {
		padding: 0 1rem;
	}
	.open-menu {
		--size: 3rem;
		display: none;
		height: var(--size);
		width: var(--size);
		border-radius: 50%;
		/* display: grid; */
		place-items: center;
	}
	.open-menu:focus {
		background-color: rgba(var(--app-color-dark-rgb), 0.2);
	}
	@media screen and (max-width: 900px) {
		.open-menu {
			display: grid;
		}
		nav > a {
			display: none;
		}
	}
</style>
