<template>
    <main>
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

<script setup>
    import portfoliodb from '../modules/portfoliodb'
    const { state } = portfoliodb()
</script>

<style scoped>
*{
    border: 0;
    box-sizing: border-box;
}

main {
    padding-top: 16vh;
}

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
    padding-top: 16px;
}

.portfolio-content p {
    padding-top: 18px;
    padding-bottom: 16px;
}
/* styling portfolio text end */


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
  font-size: 50px;
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
    .servicesbox h1 {
        font-size: 35px;
    }
}

@media only screen and (max-width: 540px) {
    .servicesbox h1 {
        font-size: 24px;
    }
}
/* responsive end */


</style>