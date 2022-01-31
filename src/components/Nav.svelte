<script>
	import { page } from "$app/stores";
	import { mdiMenu } from "@mdi/js";
	import AppIcon from "./AppIcon.svelte";
	import MobileNav from "./MobileNav.svelte";

	let isMobileNavOpen = false;

	/** @param {string} path */

	const isCurrent = (path) => path === $page.url.pathname;
</script>

<header class:mobile-nav-open={isMobileNavOpen}>
	<!-- <img src="../../static/" /> -->
	<div class="logo-alt">
		<img src="/insignia.png" alt="Insignia" />
		<hr />
		<img src="/logo.png" alt="Logo" />
		<span>CS Club</span>
	</div>
	<span />
	<nav>
		<a href="/" aria-current={isCurrent("/")}>HOME</a>
		<!-- <a href="/gallery" aria-current={isCurrent("/gallery")}>GALLERY</a> -->
		<a href="/cp" aria-current={isCurrent("/cp")}>CP</a>
		<a href="/prit" aria-current={isCurrent("/prit")}>PRIT</a>
		<a href="/edith" aria-current={isCurrent("/edith")}>EdITH</a>
		<a href="/networking" aria-current={isCurrent("/networking")}>NETWORKING</a>
		<a href="/people" aria-current={isCurrent("/people")}>PEOPLE</a>
		<!-- <a href="/timeline" aria-current={isCurrent("/timeline")}>TIMELINE</a> -->
	</nav>

	<div class="buttons">
		<button class="open-menu" on:click={() => (isMobileNavOpen = true)}>
			<AppIcon path={mdiMenu} fill="var(--app-color-dark)" />
		</button>
	</div>
</header>

{#if isMobileNavOpen}
	<MobileNav
		on:close={() => (isMobileNavOpen = false)}
		current={$page.url.pathname}
	/>
{/if}

<style lang="scss">
	@import "../css/screens.scss";

	header {
		position: sticky;
		z-index: 999999;
		top: 0;
		left: 0;

		width: 100vw;

		padding: 1rem;

		display: grid;
		grid-template-columns: auto 1fr auto auto;
		align-items: center;

		background-color: rgba(var(--app-color-light-rgb), 0.7);
		backdrop-filter: blur(70px);
		box-shadow: 0px 4.4px 5.3px rgba(0, 0, 0, 0.162),
			0px 14.7px 17.9px rgba(0, 0, 0, 0.238), 0px 66px 80px rgba(0, 0, 0, 0.4);
		box-sizing: border-box;
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
		color: var(--app-color-primary);
		display: flex;
		font-size: 1.875rem;
		align-items: center;
		justify-content: center;

		hr {
			margin-top: 15px;
			margin-bottom: 15px;
			border: 1px solid var(--app-color-primary);
		}

		img {
			height: 60px;
			width: 60px;
			margin-left: 5px;
			margin-right: 5px;
		}
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
	.mobile-nav-open {
		@keyframes fade-out {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
			}
		}

		opacity: 0;
		animation: fade-out 0.5s;
		pointer-events: none;
	}

	@include small-screens {
		.open-menu {
			display: grid;
		}
		nav > a {
			display: none;
		}
	}

	@include medium-screens {
		.open-menu {
			display: grid;
		}
		nav > a {
			display: none;
		}
	}

	@media (max-width: 1045px) {
		.logo-alt span {
			display: none;
		}
	}
</style>
