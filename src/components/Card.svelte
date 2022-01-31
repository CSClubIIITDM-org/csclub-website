<script>
	import Modal, { getModal } from "./Modal.svelte";

	const showPopup = () => {
		if (actions) getModal(id).open();
	};

	export let actions = false;
	export let id = "unknown";
</script>

<div class="card" on:click={showPopup} class:pointer={actions}>
	<div class="content">
		<slot name="content">
			<slot />
		</slot>
	</div>
	{#if actions}
		<span class="spacer" />
		<div class="actions">
			<slot name="actions">
				<div>+</div>
			</slot>
		</div>
	{/if}
</div>

<Modal {id}>
	<slot name="modal-content" />
</Modal>

<style lang="scss">
	@import "../css/screens.scss";

	.pointer {
		cursor: pointer;
	}

	.card {
		margin: 0.5rem;
		word-wrap: break-word;
		display: flex;
		box-sizing: border-box;
		font-size: 1.5rem;
		text-align: center;
		align-items: center;
		justify-content: center;
		height: 10rem;
		min-width: 50vw;
		max-width: 50vw;
		background: var(--app-gradient-light);
		border-radius: 40px;
		padding: 3rem !important;
		box-sizing: border-box;
		flex: 1 1 auto;
	}

	.content {
		box-sizing: border-box;
		flex: 1 1 auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0 1.5rem;
	}

	.spacer {
		flex: 1 1 auto;
	}

	@include small-screens {
		.card {
			height: 8rem;
			padding: 0.5rem;
			font-size: 1rem;
			min-width: 75vw;
			max-width: 75vw;
		}

		.content {
			margin: 0 0.25rem;
		}
	}
</style>
