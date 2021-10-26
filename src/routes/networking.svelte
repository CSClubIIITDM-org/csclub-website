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
  
  <body height="auto">
    <header style="background-color:rgb(31, 41, 55);">
      <div>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn "><i class="fas fa-bars" />☰</label>
          <img src="" width="70" height="70" alt="" />
          <span class="vl" />
          <img src="" width="70" height="70" alt="" />
          <a href="." class="title"><strong>&emsp &emsp CS CLUB</strong></a>
          <ul>
            <li><a href=".">&emsp &emsp Home &emsp &emsp</a></li>
            <li><a href="gallery">&emsp &emsp Gallery &emsp &emsp</a></li>
            <li><a href="cp">&emsp &emsp CP &emsp &emsp</a></li>
            <li><a href="prit">&emsp &emsp PRIT &emsp &emsp</a></li>
            <li><a href="edith">&emsp &emsp EDITH &emsp &emsp</a></li>
            <li><a href="networking"> &emsp &emsp Networking &emsp &emsp</a></li>
            <li><a href="people">&emsp &emsp People &emsp &emsp</a></li>
            <li><a href="timeline">&emsp &emsp Timeline &emsp &emsp</a></li>
          </ul>
        </nav>
      </div>
    </header>
  
    <br /><br />
    <div class="heading">
      <h1>Networking</h1>
    </div>
  
    <div id="row">
      <div class="column_1">
        <h2 class="qq">Our Aim</h2>
        <p>
          The greatest invention created in the information age, the INTERNET. We
          the Networking Branch work towards spreading the influence and events of
          the CS Club and form connections with Other colleges and technical
          institutes.
        </p>
        <p>
          We help bring the creative part of the CS club by designing Posters,
          Updating Social Media through Regular POsts, and connecting the students
          to the Computer Industry. Our branch is the glue that connects the other
          3 branches by spreading awareness of events and talks and helping bring
          projects to the students.
        </p>
      </div>
    </div>
  
    <img
      id="pic"
      width="500em"
      height="500em"
      padding="50px"
      src="https://bit.ly/fcc-relaxing-cat"
      alt="Add pic here"
    />
    <br /><br />
    <div id="main" class="main">
      <div id="first" class="first">
        <div style="font-size:2.0rem">Location</div>
        <div class="mapouter"><div class="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=iiitdmk&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com/divi-discount/"></a><br><style>.mapouter{position:relative;text-align:right;height:auto;width:auto;}</style><a href="https://www.embedgooglemap.net">embed google maps iframe</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:auto;width:auto;}</style></div></div>
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
  </body>
  
  <section />
  
  <style>
    body {
      background-color: #101827;
      height: 200%;
    }
    p {
      color: whitesmoke;
    }
    nav {
      height: 100px;
      width: 100%;
      position: fixed;
      left: 0;
      background: rgb(31, 41, 55);
      z-index: 100;
    }
    nav img {
      margin-top: 10px;
    }
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
      color: #3bdf8a;
    }
    .title {
      color: #3bdf8a;
      text-decoration: none;
      font-size: 35px;
      line-height: 80px;
      font-weight: bold;
    }
    nav ul {
      float: right;
      margin-right: 20px;
    }
    nav ul li {
      display: inline-block;
      line-height: 80px;
      margin: 0 5px;
    }
    nav ul li a:hover {
      color: white;
    }
    .checkbtn {
      font-size: 30px;
      float: right;
      margin-right: 40px;
      line-height: 80px;
      display: none;
    }
    #check {
      display: none;
    }
    section {
      position: absolute;
      top: 120px;
    }
    @media (max-width: 920px) {
      .checkbtn {
        display: block;
      }
      ul {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 80px;
        left: -100%;
        background: rgb(31, 41, 55);
        text-align: center;
        transition: all 0.5s;
      }
      nav ul li {
        display: block;
        font-size: 20px;
      }
      #check:checked ~ ul {
        left: 0;
      }
    }
  
    .heading {
      background: black;
      color: #34d399;
      text-align: center;
      font-size: 2.5rem;
      padding: 170px 250px;
      margin: 0;
    }
  
    .column_1 {
      float: left;
      width: 55%;
      padding: 50px;
      margin-top: 2rem;
    }
  
    .column_1 h2 {
      font-size: 50px;
      color: #3bdf8a;
    }
  
    .column_1 p {
      padding: 15px 0;
      font-size: 20px;
      color: white;
    }
  
    .copyright {
      color:gray;
      text-align: center;
    }
  
    .first {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 50px;
      margin: 10px;
      color: white;
    }
  
    .first p {
      letter-spacing: 0.5px;
      font-size: 1.25rem;
      margin-bottom: 10px;
    }
    .main {
      margin: 35px;
      background: black;
      width: auto;
      height: auto;
      border-radius: 16px;
      flex-direction : centre;
    }
  </style>
  
