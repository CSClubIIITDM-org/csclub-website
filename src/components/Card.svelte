<script>
	export let actions = false;
</script>

<div class="card">
	<div class="content">
		<slot />
	</div>
	{#if actions}
		<span class="spacer" />
		<div class="actions">
			<slot name="actions">+</slot>
		</div>
	{/if}
</div>

<style>
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
		background: var(--app-gradient-light);
		border-radius: 40px;
		padding: 2.25rem;
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
</style>
