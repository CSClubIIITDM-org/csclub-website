<script context="module">
	let onTop; //keeping track of which open modal is on top
	const modals = {}; //all modals get registered here for easy future access

	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id = "") {
		return modals[id];
	}
</script>

<script>
	import { onDestroy } from "svelte";

	let topDiv;
	let visible = false;
	let prevOnTop;
	let closeCallback;

	export let id = "";

	/**
	 * API
	 * @param {Function} callback
	 */
	function open(callback) {
		closeCallback = callback;
		if (visible) return;
		prevOnTop = onTop;
		onTop = topDiv;

		//this prevents scrolling of the main window on larger screens
		document.body.style.overflow = "hidden";

		visible = true;
		//Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
		document.body.appendChild(topDiv);
	}

	/**
	 * @param {undefined} [retVal]
	 */
	function close(retVal) {
		if (!visible) return;
		onTop = prevOnTop;
		if (onTop == null) document.body.style.overflow = "";
		visible = false;
		if (closeCallback && typeof closeCallback === "function")
			closeCallback(retVal);
	}

	//expose the API
	modals[id] = { open, close };

	onDestroy(() => {
		delete modals[id];
	});
</script>

<div id="topModal" class:visible bind:this={topDiv} on:click={close}>
	<div id="modal" on:click|stopPropagation={() => {}}>
		<svg id="close" on:click={close} viewBox="0 0 12 12">
			<circle cx="6" cy="6" r="6" />
			<line x1="3" y1="3" x2="9" y2="9" />
			<line x1="9" y1="3" x2="3" y2="9" />
		</svg>
		<div id="modal-content">
			<slot />
		</div>
	</div>
</div>

<style lang="scss">
	@import "../css/screens.scss";

	$modal-height: avh(80);

	#topModal {
		visibility: hidden;
		z-index: 999999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #4448;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
	#modal {
		z-index: 9999999;
		box-sizing: border-box;
		position: relative;
		border-radius: 6px;
		background-color: rgba(var(--app-color-light-rgb), 0.7);
		box-shadow: 0px 4.4px 5.3px rgb(0 0 0 / 16%),
			0px 14.7px 17.9px rgb(0 0 0 / 24%), 0px 66px 80px rgb(0 0 0 / 40%);
		backdrop-filter: blur(70px);
		max-height: $modal-height;
		padding: 3rem;
		margin: 3rem;
	}

	#modal-content {
		box-sizing: border-box;
		position: relative;
		max-height: calc($modal-height - 3rem);
		overflow-y: scroll;
	}

	.visible {
		visibility: visible !important;
	}

	#close {
		position: absolute;
		top: -10px;
		right: -10px;
		width: 32px;
		height: 32px;
		cursor: pointer;
		fill: #f44;
		transition: transform 0.3s;
	}

	#close:hover circle {
		fill: black;
	}

	#close line {
		stroke: #fff;
		stroke-width: 2;
	}

	@include small-screens {
		#modal {
			margin: 1.5rem;
		}
	}
</style>
