<template>
  <main>
    <!-- frontpage -->
    <div class="frontpage-border">
      <div class="frontpage">

        <div class="frontpage-top-content flex">
          <!-- introduction -->
          <div class="frontpage-content w-6/12">
            <h3>Hej, jeg er</h3>
            <h1>Lærke Nicole Nielsen</h1>
            <h2 class="multimediedesigner">Og er Multimediedesigner</h2>
            <!-- button to go straight to contact -->
            <div class="frontpage-button pt-5">
              <RouterLink to="/portfolio">
                <button id="button1" class="button">Kontakt mig</button>
              </RouterLink>
            </div>
          </div>
          
          <div class="my-portrait w-6/12 flex justify-end pb-10">
            <img src="https://firebasestorage.googleapis.com/v0/b/laerke-nicole-portfolio.appspot.com/o/projects%2Fbeige-background.jpg?alt=media&token=c6fe6e6b-1287-453a-91cf-cc99746bc4b0&_gl=1*t2doc5*_ga*MTk3MzI2MTY1LjE2ODIwNzA2MjE.*_ga_CW55HF8NVT*MTY4NTg4OTg1MS40OC4xLjE2ODU4ODk5MDkuMC4wLjA." alt="portrait-me" width="200">
          </div>
        </div>
        

        

        <div class="passionBox flex text-right justify-end">
          <div>
            <p>
              Med en passion for at bringe mine 
              kreative ideer til virkelighed <br>gennem 
              fotografering, videoredigering & webdevelopment
            </p>
          </div>
        </div>
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



    <div class="portfolio-item-container">

        <!-- making a loop for all of my projects -->
        <div v-for="item in state" :key="item" class="portfolio-item">

          <!-- container for projects -->
          <div class="portfolio-content" :class="item.id">

            <!-- left portfolio -->
            <div class="portfolioBorder1">
              <div id="portfolioSection1">
                  <div class="portfolioSection1Content">
                    <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
                      <div>
                        <img :src="item.image" class="product-image" alt="portfolio-img">
                      </div>   
                    </RouterLink>
                  </div>
              </div>
            </div>
            
            <!-- right portfolio -->
            <div class="portfolioBorder2">
                <div id="portfolioSection2">
                    <div class="portfolioSection2Content">
                      <h4 class="p-number" :class="item.number">{{ item.number }}</h4>
                      <h1 class="p-category" :class="item.category">{{ item.category }}</h1>
                      <h3 class="p-title">{{ item.title }}</h3>
                      <p>{{ item.description }}</p>
                      <RouterLink :to="{ name: 'portfoliodetails', params:{id: item.id}}">
                          <button id="button1">Se mit arbejde</button>
                      </RouterLink>
                    </div>
                </div>
            </div>   
          </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import portfoliodb from '../modules/portfoliodb'
const { state } = portfoliodb()
</script>

<style scoped>

main {
  padding-top: 96px;
}

/*frontpage*/
.frontpage-border {
  padding: 15px;
  background-color: var(--primary-color);
}
.frontpage {
  padding-top: 90px;
  padding-left: 8%;
  background-color: var(--primary-color);
  border: var(--bright-border);
  max-height: 90vh;
}

.frontpage h3 {
  font-family: rift, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  color: var(--white-text);
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
  font-size: 42px;
  text-transform: uppercase;
  line-height: 1;
}
/*frontpage end*/


/* explaining what my passion is */
.passionBox {
  flex-direction: row;
  padding-right: 8%;
}

.passionBox p {
  padding-bottom: 60px;
  color: var(--white-text);
}
/* explaining what my passion is end */


/* styling position of buttons */
button {
  margin-bottom: 60px;
}
/* styling position of buttons end */


/* my portrait */
.my-portrait {
  padding-right: 8%;
}

.my-portrait img {
  object-fit: cover;
  object-position: center;
}
/* my portrait end */


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
  font-size: 40px;
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
/* scrollbar of my specialty of subjects end */ 



/* making container of projects */
.portfolio-item-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  background-color: var(--black-headline);
  padding-bottom: 60px;
  width: 100%;
}

.portfolio-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 0;
  background-color: var(--black-headline);
  width: 100%;
}

.portfolio-content {
  display: flex;
  flex-direction: row;
  margin-bottom: 24px;
  width: 100%;
}

.portfolioBorder1 {
  width: 50%;
  padding: 15px 15px 15px 15px;
  background-color: var(--white-headline);
}
/* portfolio container end */


/* left side portfolio */
#portfolioSection1 {
  background-color: var(--white-headline);
  border: var(--dark-border);
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portfolioSection1Content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px 8%;
}


/* right side portfolio */
.portfolioBorder2 {
  width: 50%;
  padding: 15px;
  background-color: var(--secondary-color);
}

#portfolioSection2 {
  background-color: var(--secondary-color);
  display: flex;
  flex-direction: row;
  border: var(--bright-border);
  height: 75vh;
}

#portfolioSection2 .portfolioSection2Content {
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
/* making container of projects end */


/* stying image */
.portfolioSection1Content img {
  max-height: 60vh;
}

.portfolioSection1Content img:hover {
  box-shadow:  9px 9px 18px #b5b5b5,
             -9px -9px 18px #ffffff;
}
/* stying image end */


/* styling portfolio text */
.p-number {
  color: var(--white-text);
}

.p-category {
  color: var(--white-headline);
  transform: scaleY(1.4)
}

.p-title {
  color: var(--white-text);
}

.portfolio-content p {
  padding-top: 16px;
  padding-bottom: 12px;
  color: var(--white-text);
}
/* styling portfolio text end */


/* responsive */
@media only screen and (max-width: 950px) {
  .frontpage {
    padding-top: 60px;
  }

  .frontpage-top-content {
    flex-direction: column;
  }

  .frontpage-content {
    width: 100%;
  }

  .frontpage h1 {
    font-size: 36px;
  }

  .frontpage h2{
    font-size: 30px;
  }

  .frontpage-button {
    padding-top: 12px;
  }
  .frontpage button {
    margin-bottom: 50px;
    padding-top: 12px;
  }

  .my-portrait {
    justify-content: flex-start;
    padding-bottom: 12px;
  }

  .passionBox {
    text-align: left;
    justify-content: flex-start;
  }

  .portfolio-content {
    margin-bottom: 44px;
  }

  .portfolio-content {
    flex-direction: column;
  }

  .portfolioBorder1 {
    width: 100%;
  }

  .portfolioBorder2 {
    width: 100%;
  }

  #portfolioSection2 {
    height: 35vh;
  }
}

@media only screen and (max-width: 900px) {
  .product-image {
      max-inline-size: 100%;
      block-size: auto;
      object-fit: contain;
  }    
}

@media only screen and (max-width: 800px) {
  .specialties .scroll-text span {
    font-size: 32px;
  }
  .scroll-text hr {
  height: 2px;
  width: 1.5rem;
  }
}

@media only screen and (max-width: 580px) {
  .frontpage h3 {
    font-size: 18px;
  }

  .passionBox p {
    padding-right: 40px;
  }

  #portfolioSection1 {
    height: auto;
  }
}

@media only screen and (max-width: 550px) {
  .frontpage h1 {
    font-size: 34px;
  }

  .frontpage h2 {
    font-size: 28px;
  }
}

@media only screen and (max-width: 480px) {
  .frontpage h1 {
    font-size: 28px;
  }

  .frontpage h2 {
    font-size: 23px;
  }
}

@media only screen and (max-width: 400px) {
  .p-category {
    font-size: 22px;
    line-height: 1.1;
    padding: 8px 0;
  }
}
/* responsive end*/


</style>