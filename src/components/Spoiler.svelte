<div class="spoiler">
	<div>
		<slot name="title" />
	</div>
	<span class="spacer" />
	<a href="/">+</a>
</div>
<div class="spoiler-content">
	<slot name="content" />
</div>

<style lang="scss">
	@import "../css/screens.scss";

	.spoiler {
		width: 100%;
		word-wrap: break-word;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		font-size: 1.125rem;
		padding: 1.5rem;
		align-items: center;
		height: 5rem;
		background: var(--app-gradient-light);
		border-radius: 25px;
		flex: 1 1 auto;
	}

	.spacer {
		flex: 1 1 auto;
	}

	@include small-screens {
		.spoiler {
			height: 4rem;
			font-size: 0.75rem;
      padding: 1.125rem;
		}
	}
</style>
