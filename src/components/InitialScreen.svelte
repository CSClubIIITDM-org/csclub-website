<div class="heading">
	<h1><slot /></h1>
</div>
<br />

<style lang="scss">
	@import "../css/screens.scss";

	.heading {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		height: calc(avh(100) - 92px);
		width: 100%;
		margin: 0;

		background: black center center / cover no-repeat;
	}

	.heading h1 {
		text-align: center;
		font-size: 125px;
		font-family: var(--app-heading-font-family);
		font-style: normal;
	}

	@include small-screens {
		.heading h1 {
			font-size: avh(6);
		}
	}
</style>
