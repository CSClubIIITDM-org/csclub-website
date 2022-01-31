<script>
	import Card from "../components/Card.svelte";
	import InitialScreen from "../components/InitialScreen.svelte";
</script>

<svelte:head>
	<title>EdITH / CS Club / IIITDM Kancheepuram</title>
</svelte:head>

<InitialScreen>Educating Information Technology and Hardware</InitialScreen>
<main>
	<section id="our-aim" class="flex">
		<div>
			<h2>Our Aim</h2>
			<br />
			<p>
				Education in Information Technology and Hardware commonly known as EdITH
				is a branch of the CS Club that strives to create opportunities for
				students to explore a variety of domains in Computer Science - bridging
				the gap between software and hardware. We help students explore
				different areas of interest by providing them a social environment where
				students with various technology experiences can come together and share
				their knowledge and expertise.
			</p>
			<br /><br />
			<p>
				The hands-on experience that we provide increases self-reliance and
				interest. Keeping sessions on a myriad of topics ranging from Logic to
				Cybersecurity keeps them up to date with the ever evolving technology.
				Conducting guest lectures and workshops aid students to get exposure to
				new facets of the subject beyond the conventional classrooms.
			</p>
		</div>
		<img src="/edith.png" alt="edith" />
	</section>
	<br /><br />
	<section id="our-events">
		<h2>Our Events</h2>
		<br />
		<div class="our-events">
			<!-- TODO: put everything inside a 'for' loop and have an array of events
           in JS -->
			<div>
				<Card actions id="linux-session">
					<span slot="content">Linux Session</span>
					<div slot="modal-content">
						<h3>Conducted By</h3>
						<span>Jagadeeshan</span><br />
						<h3>Number of attendees</h3>
						<span>40-50</span><br />
						<h3>Resources</h3>
						<div>Linux Session</div>
						<br />
						<h3>Outcome</h3>
						<div>
							Basic concepts of linux including navigation using terminal, linux
							file system, IO, Scheduling tasks, inspecting current running
							tasks and other miscellaneous topics were covered.
						</div>
					</div>
				</Card>
				<Card actions id="python">
					<span slot="content">Python</span>
					<div slot="modal-content">
						<h3>Conducted By</h3>
						Y Sai Mohith<br />
						<h3>Number of attendees</h3>
						<span>40-50</span><br />
						<h3>Resources</h3>
						<div>Python</div>
						<br />
						<h3>Outcome</h3>
						<div>
							<p>
								Students were given a basic 1 hour crash course on Python which
								covered the topics like:
							</p>
							<ol type="A">
								<li>1. Input output</li>
								<li>2. Data Types</li>
								<li>3. Loops and conditionals</li>
								<li>4. Functions</li>
								<li>5. File Handling</li>
								<li>6. Exception handling</li>
							</ol>
						</div>
					</div>
				</Card>
				<Card actions id="wireshark">
					<span slot="content">Wireshark</span>
					<div slot="modal-content">
						<h3>Conducted By</h3>
						<span>Nithish</span><br />
						<h3>Number of attendees</h3>
						<span>40-50</span>
						<br />
						<h3>Resources</h3>
						<div>Wireshark</div>
						<br />
						<h3>Outcome</h3>
						<div>
							Students were introduced to the packet analysis tool Wireshark.
							The session covered installation of wireshark, capturing the
							packets, exporting the captured packets, filtering the packet
							logs.
						</div>
					</div>
				</Card>
			</div>
			<div>
				<Card actions id="git-&-github">
					<span slot="content">Git & GitHub</span>
					<div slot="modal-content">
						<h3>Conducted By</h3>
						Atharva<br />
						<h3>Number of attendees</h3>
						<span>35-40</span><br />
						<h3>Resources</h3>
						<div>Git & Github</div>
						<br />
						<h3>Outcome</h3>
						<div>
							Basic concepts of Git and Github were taught. The session covered
							signing up on Github, creating a local repository, basic concepts
							of git version control like commit and pushing it to remote
							repositories. The session also touched upon analysing git logs to
							navigate through versions.
						</div>
					</div>
				</Card>
				<Card actions id="flask">
					<span slot="content">Flask</span>
					<div slot="modal-content">
						<span class="flex">
							<h3>Conducted By</h3>
							Atharva<br />
						</span>
						<h3>Number of attendees</h3>
						<span>30-40</span><br />
						<h3>Resources</h3>
						<div>Flask</div>
						<br />
						<h3>Outcome</h3>
						<div>
							Attendees were introduced to the flask microframework. A basic
							CRUD application was built from scratch.
						</div>
					</div>
				</Card>
				<Card actions id="golang-crash-course">
					<span slot="content">Golang Crash Course</span>
					<div slot="modal-content">
						<h3>Conducted By</h3>
						<span>Jagadeeshan</span><br />
						<h3>Number of attendees</h3>
						<span>40-45</span><br />
						<h3>Resources</h3>
						<div>Go session</div>
						<br />
						<h3>Outcome</h3>
						<div>
							Basic syntax of Go, variables, Formatting, Flow control( if else,
							for loop, for range loop, while loop, switch case) , Functions,
							struct, interfaces
						</div>
					</div>
				</Card>
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
	}

	.flex {
		display: inline-flex;
		gap: 1rem;
	}

	#our-aim {
		font-size: 0.95rem;
	}

	.our-events {
		width: 100%;
		overflow: auto;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		div {
			display: flex;
			flex-direction: row;
			width: 100%;
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
	}
</style>
