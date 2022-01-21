<footer>
	<div id="row" class="row">
		<div class="column">
			<div>Location</div>
			<div class="map">
				<a
					href="https://www.google.com/maps/place/Indian+Institute+of+Information+Technology,+Design+and+Manufacturing,+Kancheepuram/@12.8404445,80.1327521,3992m/data=!3m1!1e3!4m5!3m4!1s0x0:0x9f1067aa71e3898e!8m2!3d12.8379343!4d80.1373441?hl=en-US"
				>
					<img src="/map.png" alt="map" />
				</a>
				<br />
			</div>
		</div>
		<div class="column">
			<div>Contact Us:</div>
			<div class="flex inline-logo">
				<img src="/logo.png" alt="logo" class="logo" />
				<div>CS Club</div>
			</div>
			<div>
				<p>IIITDM Kancheepuram,</p>
				<p>Chennai : 600127.</p>
			</div>
			<div>
				Email: <a href="mailto: csclub@iiitdm.ac.in">csclub@iiitdm.ac.in</a>
			</div>
		</div>
	</div>

	<p class="copyright">
		Copyrights © {new Date().getFullYear()} | All Rights Reserved | Done by
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a href="#">Web Team</a>
	</p>
</footer>

<style lang="scss">
	@import "../css/screens.scss";

	img {
		width: 17.5rem;
		height: auto;
	}

	img.logo {
		height: 3rem;
		width: auto;
	}

	.flex {
		display: inline-flex;
		gap: 1rem;
	}

	p {
		color: whitesmoke;
	}

	.copyright {
		color: gray;
		text-align: center;
	}

	.row {
		display: flex;
		justify-content: center;
		padding: 15px;
	}

	.row p {
		letter-spacing: 0.5px;
		font-size: 1.25rem;
		margin-bottom: 10px;
	}

	.column {
		flex: 50%;
		padding: 25px;
		font-size: 2rem;
	}

	footer {
		box-sizing: border-box;
		background: black;
		width: 75vw;
		height: auto;
		border-radius: 25px;
	}

	.map {
		position: relative;
		text-align: left;
		height: auto;
		width: auto;
		overflow: hidden;
		background: none !important;
	}

	@include small-screens {
		footer {
			border-radius: 25px 25px 0 0;
			width: avh(100);
		}

		.row p,
		.column {
			font-size: 15px;
		}

		.row,
		.column {
			flex-direction: column;
		}

		.column {
			text-align: center;
			display: flex;
		}

		.inline-logo {
			display: block;
		}

		.map {
			align-self: center;
			margin-top: 2rem;
		}
	}
</style>
