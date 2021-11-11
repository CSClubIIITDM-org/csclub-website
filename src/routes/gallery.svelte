<script>
    import { fade } from "svelte/transition";
  
    const carouselPhotos = [
      "CS Club IIITDM",
      "Gallery",
      "Competative Programming",
      "Project, Research & Industrial Talks",
      "Educating Information Technology and Hardware",
      "Networking",
      "People",
      "Timeline",
    ];
  
    let index = 0;
  
    const next = () => {
      index = (index + 1) % carouselPhotos.length;
    };
</script>
  
<body>  
    <div class="heading">
      <h1>Gallery</h1>
    </div>
		
		<div class="gallery-tiles">
			<div class="tiles">
				<div>
					<h2>CS Club 2019</h2>
				</div>
				<div class="box">

				</div>
			</div>

			<div class="tiles">
				<div>
					<h2>Vashisht 2019</h2>
				</div>
				<div class="box">

				</div>
			</div>

			<div class="tiles">
				<div>
					<h2>Random Sec</h2>
				</div>
				<div class="box">

				</div>
			</div>
		</div>

    <div id="main" class="main">
      	<div id="row" class="row">
			<div class="column">
				<div style="font-size:2.0rem">Location</div>
				<div class="mapouter">
					<div class="gmap_canvas">
						<!-- svelte-ignore a11y-missing-attribute -->
						<iframe
							id="gmap_canvas"
							src="https://maps.google.com/maps?q=iiitdmk&t=k&z=15&ie=UTF8&iwloc=&output=embed"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"/>
						<!-- svelte-ignore a11y-missing-content -->
						<a href="https://www.whatismyip-address.com/divi-discount/"/>
						<br/>
						<style>
						.mapouter {
							position: relative;
							text-align: left;
							height: auto;
							width: auto;
						}
						</style>
						<!-- svelte-ignore a11y-missing-content -->
						<a href="https://www.embedgooglemap.net"></a>
						<style>
						.gmap_canvas {
							overflow: hidden;
							background: none !important;
							height: auto;
							width: auto;
						}
						</style>
					</div>
				</div>
			</div>
			<div class="column">
				<div style="font-size:2.0rem">Contact Us:</div>
				<div style="font-size:2.2rem">CS Club</div>
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
			Copyrights © 2020 | All Rights Reserved | Done by
			<span>Web Team</span>
		</p>
    </div>
</body>

  
<style>
    body {
      background-color: var(--app-color-shell);
      margin: 0;
    }
    p {
      color: whitesmoke;
    }
    .heading {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
	
      height: 100vh;
      width: 100%;
      margin: 0;

      background: black center center / cover no-repeat;
    }

    .heading h1 {
      text-align: center;
      font-size: 150px;
      font-family: var(--app-heading-font-family);
      font-style: normal;
    }

    .gallery-tiles {
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      width: 100%;
    }

    .gallery-tiles h2 {
      font-size: 40px;
      overflow: hidden;
      text-align: center;
    }
    .gallery-tiles h2:before,
    h2:after {
      background-color: var(--app-color-primary);
      content: "";
      display: inline-block;
      height: 2px;
      position: relative;
      vertical-align: middle;
      width: 50%;
    }
    .gallery-tiles h2:before {
      right: 0.5em;
      margin-left: -50%;
    }
    .gallery-tiles h2:after {
      left: 0.5em;
      margin-right: -50%;
    }

    .tiles {
      padding-bottom: 5%;
    }

	.tiles h2 {
		font-family: var(--app-main-font-family);
		font-style: normal;
	}

	.box {
	background-color: var(--app-color-primary);
	box-sizing: border-box;
	padding: 5%;
	margin-top: 1%;
	height: 300px;
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
    }

    .main {
      background: black;
      width: 100%;
      height: auto;
      border-radius: 25px;
    }
</style>
