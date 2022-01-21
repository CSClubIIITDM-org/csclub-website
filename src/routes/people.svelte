<script>
	import InitialScreen from "../components/InitialScreen.svelte";

	let isLazysizesImported = false;

	/**
	 * @param {HTMLImageElement} node
	 */
	export function lazy(node) {
		const srcVal = node.src;
		node.src = "";
		node.dataset.src = srcVal;

		node.classList.add("lazyload");

		if (!isLazysizesImported) {
			import("lazysizes");
			isLazysizesImported = true;
		}
	}
</script>

<InitialScreen>People</InitialScreen>
<main class="center">
	<!--  -->
	<!-- <section></section> -->
	<section id="faculty-advisor">
		<h2>Faculty Advisor</h2>
		<br />

		<span class="person">
			<div class="picture">
				<!-- <img use:lazy src="/people/.webp" alt="PLACEHOLDER" /> -->
			</div>
			<br />
			PLACEHOLDER
		</span>
	</section>

	<br /><br />

	<section id="head-core">
		<h2>Head Core</h2>
		<br />

		<span class="person">
			<div class="picture">
				<img draggable="false" alt="" />
				<img src="/people/subash.webp" alt="Subash Mylraj" use:lazy />
			</div>
			<br />
			Subash Mylraj
		</span>
	</section>
	<br /><br />
	<section id="head-core">
		<h2>WebOps Head</h2>
		<br />

		<span class="person">
			<div class="picture">
				<img
					src="/people/puru-vijayvargia.webp"
					alt="Puru Vijayvargia"
					use:lazy
				/>
			</div>
			<br />
			Puru Vijayvargiya
		</span>
	</section>

	<br /><br />

	<section id="core-team">
		<h2>Core Team</h2>

		<br />

		<div class="flex">
			<span class="person">
				<div class="picture">
					<img
						src="/people/ankit-kumar-bharti.webp"
						alt="Ankit Kumar"
						use:lazy
					/>
				</div>
				<br />
				Ankit Kumar
			</span>

			<span class="spacer" />

			<span class="person">
				<div class="picture">
					<img
						src="/people/atharva-kadlag.webp"
						alt="Atharva Kadlag"
						use:lazy
					/>
				</div>
				<br />
				Atharva Kadlag
			</span>

			<span class="spacer" />

			<span class="person">
				<div class="picture">
					<img src="/people/sanjay-reddy.webp" alt="Sanjay Reddy" use:lazy />
				</div>
				<br />
				G V Sanjay Reddy
			</span>
		</div>
		<br /><br />
		<div class="flex">
			<span class="person">
				<div class="picture">
					<img
						src="/people/sreenivas-dheeraj.webp"
						alt="Sreenivas Dheeraj"
						use:lazy
					/>
				</div>
				<br />
				Sreenivas Dheeraj
			</span>

			<span class="spacer" />

			<span class="person">
				<div class="picture">
					<img src="/people/sumit-kumar.webp" alt="Sumit Kumar" use:lazy />
				</div>
				<br />
				Sumit Kumar
			</span>
		</div>
	</section>
	<br /><br />
	<section id="joint-core">
		<h2>Joint Core</h2>
		<br />
		<section id="cp">
			<h2>CP</h2>
			<br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img
							src="/people/jaswanth-peddisetti.webp"
							alt="Jashwanth"
							use:lazy
						/>
					</div>
					<br />
					Jashwanth
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img
							src="/people/chekka-jitin-krishna.webp"
							alt="Chekka Jitin Krishna"
							use:lazy
						/>
					</div>
					<br />
					Jitin
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img src="/people/shyam-sundar.webp" alt="Shyam Sundar" use:lazy />
					</div>
					<br />
					R Shyam Sundar
				</span>
			</div>
			<br /><br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img src="/people/rohail-alam.webp" alt="Rohail alam" use:lazy />
					</div>
					<br />
					Rohail Alam
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img src="/people/somashekhar.webp" alt="Somashekhar" use:lazy />
					</div>
					<br />
					Somashekhar
				</span>
			</div>
		</section>
		<br /><br />
		<section id="edith">
			<h2>Edith</h2>
			<br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img src="/people/jagadeeshan.webp" alt="Jagadeeshan" use:lazy />
					</div>
					<br />
					Jagadeeshan S
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img src="/people/mariyam.webp" alt="Mariyam" use:lazy />
					</div>
					<br />
					Mariyam Joory
				</span>
			</div>
			<br /><br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img
							src="/people/nithish-vasanth.webp"
							alt="Nithish Vasanth"
							use:lazy
						/>
					</div>
					<br />
					Nithish Vasanth
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img src="/people/mohith.webp" alt="Mohith" use:lazy />
					</div>
					<br />
					Yerramsetti V S N Sai Mohith
				</span>
			</div>
		</section>
		<br /><br />
		<section id="networking">
			<h2>Networking</h2>
			<br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img
							src="/people/dheeraj-kumar.webp"
							alt="Dheeraj Kumar"
							use:lazy
						/>
					</div>
					<br />
					Dheeraj Kumar
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img
							src="/people/khushal-gautam.webp"
							alt="Khushal Gautam"
							use:lazy
						/>
					</div>
					<br />
					Khushal Gautam
				</span>
			</div>
		</section>
		<br /><br />
		<section id="prit">
			<h2>PRIT</h2>
			<br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img src="/people/himanshu.webp" alt="Himanshu" use:lazy />
					</div>
					<br />
					Himanshu Malviya
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img src="/people/yash-agarwal.webp" alt="Yash Agarwal" use:lazy />
					</div>
					<br />
					Yash Agrawal
				</span>
			</div>
		</section>
		<br /><br />
		<section id="web-development-team">
			<h2>Web Development Team</h2>
			<br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<!-- <img draggable="false" src="/people/.webp" alt="PLACEHOLDER" /> -->
					</div>
					<br />
					PLACEHOLDER
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<!-- <img draggable="false" src="/people/.webp" alt="PLACEHOLDER" /> -->
					</div>
					<br />
					PLACEHOLDER
				</span>
			</div>
			<br /><br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<!-- <img draggable="false" src="/people/.webp" alt="PLACEHOLDER" /> -->
					</div>
					<br />
					PLACEHOLDER
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<!-- <img draggable="false" src="/people/.webp" alt="PLACEHOLDER" /> -->
					</div>
					<br />
					PLACEHOLDER
				</span>
			</div>
		</section>
	</section>
	<br /><br />
</main>

<style lang="scss">
	@import "../css/screens.scss";

	main {
		padding: 0.25rem 2rem;
	}

	.flex {
		display: inline-flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
	}

	.picture {
		box-sizing: border-box;
		padding: 0;
		width: 200px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;

		background: var(--app-color-primary);
		margin: 0 auto;
		z-index: 2;

		img {
			// from https://stackoverflow.com/a/40466110
			object-fit: cover;
			border-radius: inherit;
			width: 100%;
			height: inherit;
			margin: 0;
			box-sizing: border-box;
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
			font-size: 3rem;
		}
	}
</style>
