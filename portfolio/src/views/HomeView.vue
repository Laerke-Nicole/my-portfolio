<template>
  <main>
    <!-- frontpage -->
    <div class="frontpage">

      <!-- introduction -->
      <h3>Hej, jeg er</h3>
      <h1>Lærke Nicole Nielsen</h1>
      <h2>Og er Multimediedesigner</h2>

      <div class="passionBox">
        <hr>
        <p>
          Med en passion for at bringe mine 
          kreative ideer til virkelighed <br>gennem 
          fotografering, videoredigering & webdevelopment
        </p>
      </div>
      
      <!-- buttons to go straight to contact or portfolio -->
      <div class="frontpage-buttons">
        <RouterLink to="/contact">
          <button id="button1" class="button">Kontakt mig</button>
        </RouterLink>

        <RouterLink to="/portfolio">
          <button id="button1" class="button2">Portfolio</button>
        </RouterLink>
      </div>
      
      <!-- my logo in right corner -->
      <div class="frontpageLogo">
        <hr><img src="../assets/logo-dark.svg" height="60" alt="">
      </div>
    </div>

    <!-- scrolling text with my specialties -->
    <div class="specialties">
      <div class="scroll-text">
        <span>Design & development</span>
        <hr>
        <span>Videoredigering</span>
        <hr>
        <span>Fotografering</span>
        <hr>
        <span>Design & development</span>
        <hr>
        <span>Videoredigering</span>
        <hr>
        <span id="last">Fotografering</span>
        <hr>
      </div>
      <div class="scroll-text">
        <span>Design & development</span>
        <hr>
        <span>Videoredigering</span>
        <hr>
        <span>Fotografering</span>
        <hr>
        <span>Design & development</span>
        <hr>
        <span>Videoredigering</span>
        <hr>
        <span id="last">Fotografering</span>
        <hr>
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)

</script>

<style scoped>
/*frontpage*/
.frontpage {
  padding-top: 140px;
  padding-left: 8%;
  clip-path: polygon(51% 0, 100% 36%, 100% 100%, 0 100%, 0 0);
  background-color: var(--white-headline);
  max-height: 90vh;
}

.frontpage h3 {
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: var(--secondary-color);
  text-transform: uppercase;
}

.frontpage h1 {
  color: var(--secondary-color);
  font-size: 50px;
  text-transform: uppercase;
}

.frontpage h2 {
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: 200;
  color: var(--secondary-color);
  font-size: 50px;
  text-transform: uppercase;
  line-height: 1;
}
/*frontpage end*/


/* explaining what my passion is */
.passionBox {
  display: flex;
  flex-direction: column;
}

.passionBox hr {
  display: block;
  border-width: 0;
  height: 2px;
  max-width: 460px;
  margin: 16px 0;
  background-color: var(--secondary-color);
}

.passionBox p {
  margin-bottom: 18px;
}
/* explaining what my passion is end */


/* styling position of buttons */
button {
  margin-bottom: 60px;
}

.button2 {
  margin-bottom: 60px;
  margin-left: 12px;
}
/* styling position of buttons end */


/* styling my logo in right corner */
.frontpage .frontpageLogo hr {
  display: flex;
  justify-content: flex-end;
  top: -125px;
  left: 117px;
  display: block;
  border-width: 0;
  height: 2px;
  width: 175px;
  background-color: var(--secondary-color);
  transform: rotate(90deg);
}

.frontpageLogo {
  display: flex;
  justify-content: flex-end;
  top: -60px;
  right: 100px;
}
/* styling my logo in right corner end */


/* scrollbar of my specialty of subjects */ 
.specialties {
  display: flex;
  width: 100%;
  background-color: var(--white-headline);
  overflow: hidden;
  border-top: var(--dark-border);
  border-bottom: var(--dark-border);
}

.specialties .scroll-text {
  display: flex;
  align-items: center;
  white-space: nowrap;
  transition: all 1s ease;
  gap: 2rem;
  display: flex;
  animation: animate_text 30s linear infinite;
}
  
.specialties .scroll-text span {
  margin: 0;
  font-size: 50px;
  color: var(--primary-color);
  transition: all 2s ease;
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: bold; 
}

.scroll-text hr {
  display: block;
  border-width: 0;
  height: 2px;
  width: 3rem;
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
/* scrollbar of my specialty of subjects end */ 


/* responsive */
@media only screen and (max-width: 850px) {
.frontpageLogo {
  top: -60px;
  right: 60px;
}
}

@media only screen and (max-width: 800px) {
  .specialties .scroll-text span {
    font-size: 40px;
  }
  .scroll-text hr {
  height: 2px;
  width: 2rem;
  }
}

@media only screen and (max-width: 730px) {
.frontpageLogo {
  top: -60px;
  right: 40px;
}
}

@media only screen and (max-width: 670px) {
  .frontpage .frontpageLogo hr {
  display: none;
  }
  .frontpageLogo {
  top: -40px;
  }
}

@media only screen and (max-width: 580px) {
  .frontpage h3 {
  font-size: 18px;
}

.frontpage h1 {
  font-size: 36px;
}

.frontpage h2 {
  font-size: 36px;
}

.passionBox hr {
  max-width: 330px;
}

.passionBox p {
  padding-right: 40px;
}
}

@media only screen and (max-width: 470px) {
  .frontpage h1 {
    font-size: 28px;
  }
  
  .frontpage h2 {
  font-size: 28px;
}

  .frontpageLogo {
    display: none;
  }

}
/* responsive end*/


</style>