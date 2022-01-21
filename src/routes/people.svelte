<script>
	import InitialScreen from "../components/InitialScreen.svelte";

	let main = undefined;

	// $: {
	// 	if (main) {
	// 		const pictures = main.querySelectorAll("picture");
	// 		pictures.forEach((/** @type {HTMLPictureElement} */ picture) => {
	// 			const src = picture.getAttribute("src");
	// 			const parent = picture.parentElement;
	//       console.log(parent);

	//       picture.parentElement.style.backgroundImage = `url(${src})`;
	// 		});
	// 	}
	// }
</script>

<InitialScreen>People</InitialScreen>
<main class="center" bind:this={main}>
	<!--  -->
	<!-- <section></section> -->
	<section id="faculty-advisor">
		<h2>Faculty Advisor</h2>
		<br />

		<span class="person">
			<div class="picture">
				<!-- <img draggable="false" src="/people/.webp" alt="PLACEHOLDER" /> -->
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
				<!-- src="/people/CED18I051.webp" -->
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
				<img draggable="false" alt="" />
				<!-- src="/people/CS20B1078 PURU VIJAYVARGIA.webp" -->
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
					<img draggable="false" alt="" />
					<!-- src="/people/COE19B051 ANKIT KUMAR BHARTI.webp" -->
				</div>
				<br />
				Ankit Kumar
			</span>

			<span class="spacer" />

			<span class="person">
				<div class="picture">
					<img draggable="false" alt="" />
					<!-- src="/people/CED19I015 KADLAG ATHARVA SANJAY.webp" -->
				</div>
				<br />
				Atharva Kadlag
			</span>

			<span class="spacer" />

			<span class="person">
				<div class="picture">
					<img draggable="false" alt="" />
					<!-- src="/people/CED19I042 G V SANJAY REDDY.webp" -->
				</div>
				<br />
				G V Sanjay Reddy
			</span>
		</div>
		<br /><br />
		<div class="flex">
			<span class="person">
				<div class="picture">
					<img draggable="false" alt="" />
					<!-- src="/people/COE19B038 SREENIVAS DHEERAJ MARRI.webp" -->
				</div>
				<br />
				Sreenivas Dheeraj
			</span>

			<span class="spacer" />

			<span class="person">
				<div class="picture">
					<img draggable="false" alt="" />
					<!-- src="/people/CED19I028 SUMIT KUMAR.webp" -->
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
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1007 PEDDISETTY JASHWANTH.webp" -->
					</div>
					<br />
					Jashwanth
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1075 CHEKKA JITIN KRISHNA.webp" -->
					</div>
					<br />
					Jitin
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1029 SHYAM SUNDAR R.webp" -->
					</div>
					<br />
					R Shyam Sundar
				</span>
			</div>
			<br /><br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/EC20B1072 ROHAIL ALAM.webp" -->
					</div>
					<br />
					Rohail Alam
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1041 SOMASHEKHAR.webp" -->
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
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1013 JAGADEESHAN.webp" -->
					</div>
					<br />
					Jagadeeshan S
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1030 MARIYAM.webp" -->
					</div>
					<br />
					Mariyam Joory
				</span>
			</div>
			<br /><br />
			<div class="flex">
				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1068 NITHISH VASANTH.webp" -->
					</div>
					<br />
					Nithish Vasanth
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img alt="" />
						<!-- src="/people/CS20B1108 YERRAMSETTI V S N SAI MOHITH.webp" -->
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
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1119 DHEERAJ KUMAR.webp" -->
					</div>
					<br />
					Dheeraj Kumar
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1080 KHUSHAL GAUTAM.webp" -->
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
						<img draggable="false" alt="" />
						<!-- src="/people/CS20B1097 HIMANSHU.webp" -->
					</div>
					<br />
					Himanshu Malviya
				</span>

				<span class="spacer" />

				<span class="person">
					<div class="picture">
						<img draggable="false" alt="" />
						<!-- src="/people/EC20B1059 YASH AGRAWAL.webp" -->
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
		border: 1px solid var(--app-color-primary);
		background: var(--app-color-primary);
		margin: 0 auto;
		z-index: 2;

		img {
			// from https://stackoverflow.com/a/40466110
			object-fit: cover;
			border-radius: inherit;
			width: inherit;
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
