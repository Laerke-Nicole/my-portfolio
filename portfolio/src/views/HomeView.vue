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
        <hr><img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/logos%2Flogo-light.svg?alt=media&token=85a18e37-c67c-461d-9d1f-78490a26fa28&_gl=1*kraw86*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTgyNzc5My40NC4xLjE2ODU4Mjc4MTIuMC4wLjA." height="60" alt="">
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


    <div class="portfolioViewBorder">
            <div class="portfolio-item-container">

                <!-- making a loop for all of my projects -->
                <div v-for="item in state" :key="item" class="portfolio-item">

                    <!-- container for projects -->
                    <div class="portfolio-content" :class="item.id">

                        <!-- adding the information i want to show -->
                        <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
                            <div class="zoomImg">
                                <img :src="item.image" class="product-image">
                            </div>
                        </RouterLink>

                        <h4 class="p-number" :class="item.number">{{ item.number }}</h4>
                        <h1 class="p-category" :class="item.category">{{ item.category }}</h1>
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                        <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
                            <button id="button1">Se mit arbejde</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import portfoliodb from '../modules/portfoliodb'
    const { state } = portfoliodb()

</script>

<style scoped>

main {
  padding-top: 10vh;
}

/*frontpage*/
.frontpage {
  padding-top: 90px;
  padding-left: 8%;
  clip-path: polygon(51% 0, 100% 36%, 100% 100%, 0 100%, 0 0);
  background-color: var(--primary-color);
  max-height: 90vh;
}

.frontpage h3 {
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: var(--white-headline);
  text-transform: uppercase;
}

.frontpage h1 {
  color: var(--white-headline);
  font-size: 50px;
  text-transform: uppercase;
}

.frontpage h2 {
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: 200;
  color: var(--white-headline);
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
  background-color: var(--tertiary-color);
}

.passionBox p {
  margin-bottom: 18px;
  color: var(--white-text);
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
  background-color: var(--white-headline);
  transform: rotate(90deg);
}

.frontpageLogo {
  display: flex;
  justify-content: flex-end;
  top: -60px;
  right: 100px;
  height: 60px;
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



/* making container of projects */
.portfolioViewBorder {
    padding: 15px;
    background-color: var(--white-headline);
}

.portfolio-item-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    background-color: var(--white-headline);
    padding: 0 8%;
    padding-top: 45px;
    padding-bottom: 60px;
    border: var(--dark-border);
}

.portfolio-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 0;
}
/* making container of projects end */


/* styling position of portfolios */
.product-two {
    padding: 60px 0 0 400px;
}

.product-three {
    padding: 60px 0 0 120px;
}

.product-four {
    padding: 60px 0 0 560px;
}

.product-five {
    padding: 60px 0 0 0;
}
/* styling position of portfolios end */


/* stying image */
.zoomImg {
    overflow: hidden;
    height: 350px;
}

.portfolio-item-container img {
    height: 350px;
    overflow: hidden;
    transition: transform .5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.portfolio-item-container img:hover {
    transform: scale(1.2);
    height: 350px;
}
/* stying image end */


/* styling portfolio text */
.p-number {
    padding-top: 6px;
}

.portfolio-content p {
    padding-top: 16px;
    padding-bottom: 12px;
}
/* styling portfolio text end */


/* responsive */
@media only screen and (max-width: 1200px) {
    .product-two {
    padding: 60px 0 0 350px;
    }
}

@media only screen and (max-width: 1100px) {
    .product-two {
    padding: 60px 0 0 250px;
    }
}

@media only screen and (max-width: 1000px) {
    .product-two {
        padding-top: 100px;
        padding-left: 0;
    }

    .product-three {
        padding-top: 100px;
        padding-left: 0;
    }

    .product-four {
        padding-top: 100px;
        padding-left: 0;
    }
    
    .product-five {
        padding-top: 100px;
    }
}

@media only screen and (max-width: 900px) {
    .portfolio-item-container {
        padding-top: 0;
    }

    .product-one {
        padding-top: 0;
    }

    .product-two {
        padding-top: 50px;
    }

    .product-image {
        max-inline-size: 100%;
        block-size: auto;
        object-fit: contain;
    }
}

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

@media only screen and (max-width: 420px) {
  .passionBox hr {
    max-width: 260px;
  }
}
/* responsive end*/


</style>