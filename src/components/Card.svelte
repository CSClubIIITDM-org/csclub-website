<script>
	import Modal, { getModal } from "./Modal.svelte";

	const showPopup = () => {
		getModal(id).open();
	};

	export let actions = false;
	export let id = "unknown";
</script>

<div class="card">
	<div class="content">
		<slot name="content">
			<slot />
		</slot>
	</div>
	{#if actions}
		<span class="spacer" />
		<div class="actions">
			<slot name="actions">
				<div on:click={showPopup} style="cursor: pointer;">+</div>
			</slot>
		</div>
	{/if}
</div>

<Modal {id}>
	<slot name="modal-content" />
</Modal>

<style lang="scss">
	@import "../css/screens.scss";

	.card {
		margin: 0.5rem;
		word-wrap: break-word;
		display: flex;
		box-sizing: border-box;
		font-size: 1.8rem;
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
			font-size: 1.2rem;
			min-width: 75vw;
			max-width: 75vw;
		}

		.content {
			margin: 0 0.25rem;
		}
	}
</style>
