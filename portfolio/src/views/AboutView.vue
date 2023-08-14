<template>
    <main>

        <!-- about container -->
        <div class="bright-frame">
            <div class="bright-frame-inside">

                <!-- content about me -->
                <div class="aboutMe">
                    <div class="video">
                        <iframe src="https://www.youtube.com/embed/Z7Z1Q48Qe3o" title="YouTube video player" id="video-cv" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    
                    <div class="aboutText">
                        <h1>Hvem er jeg</h1>
                        <p class="pt-3">Jeg er lige nu i gang med min multimediedesigneruddannelse på Erhvervsakademiet Sydvest i Esbjerg. Jeg er passioneret for både foto- og videoredigering, samt design og web-udvikling, men har også interesse for grafisk- og UI/UX design. Jeg elsker at lærer nyt og nørde med mit arbejde, ligegyldig hvilken opgave jeg får.</p>
                    </div>
                </div>
            </div>
        </div>

        
        <!-- text sliding animation -->
        <div class="services">
            <div class="servicesScrollBox">
                <div class="servicesScrollText">
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5 id="last">Hvad jeg kan</h5>
                    <hr>
                </div>
                <div class="servicesScrollText">
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5>Hvad jeg kan</h5>
                    <hr>
                    <h5 id="last">Hvad jeg kan</h5>
                    <hr>
                </div>
            </div>
            
            
            <!-- the services i offer -->
            <div class="servicesBorder">
                <div class="servicesbox">
                    <h4 class="servicesFirsth4">Webdesign & development</h4>
                    <h4>Foto & videoredigering</h4>
                    <h4>UI/UX design</h4>
                    <h4>Grafisk design</h4>
                    <h4 class="servicesLasth4">User Experience</h4>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style>
main {
    padding-top: 96px;
}

/* border for container */
.bright-frame {
padding: 15px;
background-color: var(--white-headline);
}

/* text about me */


.aboutMe {
display: flex;
padding: 100px 8%;
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
padding: 0 24px 7% 44px;
width: 40%;
}

.aboutText h1 {
color: var(--secondary-color);
font-size: 36px;
line-height: 0.7;
font-weight: bold;
}

/* text about me end */


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
  
.servicesScrollBox .servicesScrollText h5 {
  margin: 0;
  font-size: 36px;
  color: var(--primary-color);
  transition: all 2s ease;
  font-family: "signo", sans-serif;
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

.services h4 {
    font-family: "signo", sans-serif;
    font-style: normal;
    font-weight: bold;
    color: var(--white-headline);
    text-align: center;
    padding-bottom: 18px;
    font-size: 38px;
}

.servicesFirsth4 {
    padding-top: 45px;
}

.servicesLasth4 {
    padding-bottom: 45px !important;
}
/* services end */


/* responsive */
@media only screen and (max-width: 970px) {
    .bright-frame-inside {
        height: auto;
    }

    .aboutMe {
        display: flex;
        flex-direction: column;
    }

    .video {
        width: 100%;
        height: 200%;
    }

    iframe {
        width: 100%;
        height: 300px;
    }

    .aboutText {
        width: 70%;
        padding-top: 45px;
        padding-left: 0;
    }

    .aboutText p {
        padding-right: 0;
    }
}

@media only screen and (max-width: 700px) {
    .servicesbox h4 {
        font-size: 35px;
    }

    .servicesScrollBox .servicesScrollText {
        gap: 1rem;
    }

    .servicesScrollBox .servicesScrollText h5 {
        font-size: 28px;
    }

    .servicesScrollText hr {
        height: 2px;
        width: 1.4rem;
    }
}

@media only screen and (max-width: 570px) {
    iframe {
        height: 200px;
    }
}

@media only screen and (max-width: 540px) {
    .servicesbox h4 {
        font-size: 24px;
    }
}

@media only screen and (max-width: 490px) {
    iframe {
        height: 150px;
    }

    .aboutText {
        width: 100%;
    }
}

@media only screen and (max-width: 380px) {
    .aboutText h4 {
        font-size: 35px;
    }
}

@media only screen and (max-width: 360px) {
    iframe {
        height: 130px;
    }
}
/* responsive end */


</style>
  