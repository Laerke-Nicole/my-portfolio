<template>
    <main>

        <!-- about container -->
        <div class="aboutBorder1">
            <div class="about">

                <!-- content about me -->
                <div class="aboutMe">
                <div class="video">
                    <iframe src="https://www.youtube.com/embed/Z7Z1Q48Qe3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
                <div class="aboutText">
                    <h1>Hvem er jeg</h1>
                    <p>Jeg er lige nu i gang med min multimediedesigneruddannelse på Erhvervsakademiet Sydvest i Esbjerg. Jeg er passioneret for både foto- og videoredigering, samt design og web-udvikling, men har også interesse for grafisk- og UI/UX design. Jeg elsker at lærer nyt og nørde med mit arbejde, ligegyldig hvilken opgave jeg får. Og min detajleorienteret- og samarbejdssans hjælper mig med at give det bedste resultat.</p>
                </div>
                <div class="aboutSpecialties">
                    <p>Design & development</p>
                    <p>Videoredigering</p>
                    <p>Fotografering</p>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- text sliding animation -->
        <div class="services">
            <div class="servicesScrollBox">
                <div class="servicesScrollText">
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2 id="last">Service</h2>
                    <hr>
                </div>
                <div class="servicesScrollText">
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2>Service</h2>
                    <hr>
                    <h2 id="last">Service</h2>
                    <hr>
                </div>
            </div>
            
            
            <!-- the services i offer -->
            <div class="servicesBorder">
                <div class="servicesbox">
                    <h1 class="servicesFirstH1">Foto & videoredigering</h1>
                    <h1>Webdesign & development</h1>
                    <h1>UI/UX design</h1>
                    <h1>Grafisk design</h1>
                    <h1 class="servicesLastH1">User Experience</h1>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
main {
padding-top: 16vh;
}

/* border for container */
.aboutBorder1 {
padding: 15px 15px 15px 15px;
background-color: var(--white-headline);
}

/* text about me */
.about {
background-color: var(--white-headline);
padding: 0 8%;
padding-top: 100px;
height: 85vh;
border: var(--dark-border);
}

.aboutMe {
display: flex;
}

.video {
width: 60%;
}

iframe {
width: 100%;
height: 100%;
}

.aboutText {
display: flex;
flex-direction: column;
padding: 0 24px;
}

.aboutText h1 {
color: var(--secondary-color);
font-size: 50px;
line-height: 0.7;
}

.aboutText p {
margin-top: 12px;
max-width: 350px;
padding-right: 50px;
}
/* text about me end */


/* vertical specialties */
.aboutSpecialties {
writing-mode: vertical-rl;
display: flex;
align-items: center;
position: absolute;
right: 0;
gap: 22px;
}

.aboutSpecialties p {
font-size: 17px;
}
/* vertical specialties end */


/* services */
.servicesScrollBox {
  display: flex;
  width: 100%;
  background-color: var(--white-headline);
  overflow: hidden;
  border-top: var(--dark-border);
  border-bottom: var(--dark-border);
}

.servicesScrollBox .servicesScrollText {
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 1s ease;
  gap: 2rem;
  display: flex;
  animation: animate_text 30s linear infinite;
}
  
.servicesScrollBox .servicesScrollText h2 {
  margin: 0;
  font-size: 40px;
  color: var(--primary-color);
  transition: all 2s ease;
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: bold; 
}

.servicesScrollText hr {
    display: block;
    border-width: 0;
    height: 2px;
    width: 2rem;
    transform: rotate(90deg);
    background-color: var(--primary-color);
    align-self: center;
}

#last {
    padding-right: 2rem;
}

@keyframes animate_text {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-100%, 0, 0);
    }
}   

.servicesBorder {
    padding: 15px;
    background-color: var(--secondary-color);
}

.servicesbox {
    background-color: var(--secondary-color);
    border: var(--bright-border);
}

.services h1 {
    font-family: rift, sans-serif;
    font-style: normal;
    font-weight: bold;
    color: var(--white-headline);
    text-align: center;
    padding-bottom: 18px;
    font-size: 50px;
}

.servicesFirstH1 {
    padding-top: 45px;
}

.servicesLastH1 {
    padding-bottom: 45px !important;
}
/* services end */


/* responsive */
@media only screen and (max-width: 1030px) {
    .about {
        padding-right: 30px;
    }

    .aboutSpecialties {
        display: none;
    }
}   

@media only screen and (max-width: 980px) {
    .about {
        padding-top: 72.365px;
    }
}

@media only screen and (max-width: 970px) {
    .about {
        height: 150vh;
    }

    .aboutMe {
        display: flex;
        flex-direction: column;
    }

    .video {
        width: 560px;
        height: 315px;
    }

    iframe {
        padding-left: 15%;
    }

    .aboutText {
        padding-top: 45px;
        padding-left: 10%;
    }

    .aboutText p {
        padding-right: 0;
    }
}

@media only screen and (max-width: 850px) {
    .about {
        height: 140vh;
    }
}

@media only screen and (max-width: 800px) {
    .servicesScrollBox .servicesScrollText h2 {
        font-size: 40px;
    }

    .servicesScrollText hr {
        height: 2px;
        width: 2rem;
    }
}

@media only screen and (max-width: 700px) {
    .about {
        height: 125vh;
    }

    iframe {
        width: 100%;
        height: 100%;
    }

    .servicesbox h1 {
        font-size: 35px;
    }
}

@media only screen and (max-width: 770px) {
    .video {
        width: 448px;
        height: 200px;
    }
}

@media only screen and (max-width: 650px) {
    .video {
        width: 336px;
        height: 140px;
    }
}

@media only screen and (max-width: 540px) {
    .servicesbox h1 {
        font-size: 24px;
    }
}

@media only screen and (max-width: 470px) {
    .video {
        width: 252px;
        height: 120px;
    }
}

@media only screen and (max-width: 380px) {
    .aboutText h1 {
        font-size: 35px;
    }
}

@media only screen and (max-width: 370px) {
    .video {
        padding-left: 0;
    }

    iframe {
        padding: 0 5% 0 8%;
    }
}
/* responsive end */


</style>
  