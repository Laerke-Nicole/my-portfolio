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
/* responsive end */


</style>