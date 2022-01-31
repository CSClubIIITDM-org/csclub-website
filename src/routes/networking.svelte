<script>
	import { mdiDiscord, mdiInstagram, mdiLinkedin, mdiYoutube } from "@mdi/js";
	import AppIcon from "../components/AppIcon.svelte";
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

<svelte:head>
	<title>Networking / CS Club / IIITDM Kancheepuram</title>
</svelte:head>

<InitialScreen>Networking</InitialScreen>
<main>
	<section id="our-aim">
		<h2>Our Aim</h2>
		<br />
		<div class="flex">
			<div>
				<p>
					The greatest invention created in the information age,the INTERNET. We
					the Networking Branch work towards spreading the influence and events
					of the CS Club and form connections with other colleges and technical
					industries.
				</p>
				<br /><br />
				<p>
					We help bring the creative part of the CS club by designing Posters,
					Updating Social Media through Regular Posts,and connecting the
					students to the Computer Industry.Our Branch is the glue that connects
					the other 3 branches by spreading awareness of events and talks and
					helping bring projects to students.
				</p>
			</div>
			<img src="/networking.png" alt="networking" />
		</div>
	</section>
	<br /><br />
	<section id="social-media-handles">
		<h2>Find Us On...</h2>
		<br />
		<div class="flex center social-handles">
			<div>
				<a
					href="https://discord.gg/WuRCnpgwN5"
					target="_blank"
					rel="noopener"
					title="Discord"
				>
					<AppIcon fill="#fff" path={mdiDiscord} size={80} />
				</a>
			</div>
			<div>
				<a
					href="https://www.instagram.com/cs.club.iiitdm/"
					target="_blank"
					rel="noopener"
					title="Instagram"
				>
					<AppIcon fill="#fff" path={mdiInstagram} size={80} />
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/company/cs-club-iiitdm-kancheepuram"
					target="_blank"
					rel="noopener"
					title="LinkedIn"
				>
					<AppIcon fill="#fff" path={mdiLinkedin} size={80} />
				</a>
			</div>
			<div>
				<a
					href="https://www.youtube.com/channel/UCQuL8Qd1L6lML-FHXmD0pqw"
					target="_blank"
					rel="noopener"
					title="YouTube"
				>
					<AppIcon fill="#fff" path={mdiYoutube} size={80} />
				</a>
			</div>
		</div>
	</section>
	<br /><br />
</main>

<style lang="scss">
	@import "../css/screens.scss";

	main {
		padding: 0.25rem 2rem;
	}

	img {
		height: 20rem;
		width: auto;
		margin: 0 1rem;
	}

	.center {
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.flex {
		display: inline-flex;
		gap: 1rem;
	}

	#our-aim {
		font-size: 0.95rem;
	}

	.social-handles {
		div {
			width: auto;
			margin: 0 1rem;
		}
	}

	@include small-screens {
		main {
			padding: 0.25vw 2vw;
		}

		.flex {
			flex-direction: column;
		}

		h2 {
			font-size: 2.25rem;
		}

		img {
			height: auto;
			width: 100%;
			margin: 0;
			margin-top: 2rem;
		}
	}
</style>
