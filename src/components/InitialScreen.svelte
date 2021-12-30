<div class="heading">
	<h1><slot /></h1>
</div>
<br />

<style>
	.heading {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		height: calc(100vh - 92px);
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
</style>
